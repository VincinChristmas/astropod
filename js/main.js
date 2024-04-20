//document.querySelector('button').addEventListener('click', getFetch)

/**********THE RADIO***************
 *                                *
 *                                *
 *                                *
 *********************************/

  let currentAudio = null
  let currentAudioIndex = 0;
  
  //Math.floor(Math.random() * 4) 

  
  

let radioStation = [
  new Audio("music/Newspaper.mp3"),
  new Audio("music/Lovely.mp3"),
  new Audio("music/Confuso.mp3"),
  new Audio("music/Star Guitar.mp3")
  
]

function playMusic() {

  if (currentAudio) {
    currentAudio.removeEventListener('ended', playNextSong);
    currentAudio.pause()
  }

  if (currentAudioIndex < radioStation.length) {
    radioStation[currentAudioIndex].play()
  } else {
    console.log("end of track list")
  }

}

function playNextSong() {
  currentAudioIndex++
  if(currentAudioIndex < radioStation.length) {
    radioStation[currentAudioIndex].play()
  }
  else {
    currentAudioIndex = (currentAudioIndex + 1) % radioStation.length;
    playMusic()
  }
}

radioStation[currentAudioIndex].addEventListener('ended', playNextSong);

function stopMusic() {
  if(radioStation[currentAudioIndex]) {
    radioStation[currentAudioIndex].pause()
  }
}




function getFetch(){
  const url = `https://api.nasa.gov/planetary/apod?api_key=5bv4pmQ9vZOmoYLVVmfUMJQs1tiIxxHOa0xtsjGB`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image') {
          document.querySelector('.nasaImage').src = data.hdurl
        } else if(data.media_type === 'video') {
          document.querySelector('.nasaImage').style.visibility = 'hidden'
          document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('h3').innerText=data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()



