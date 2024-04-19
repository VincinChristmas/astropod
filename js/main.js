//document.querySelector('button').addEventListener('click', getFetch)


function playMusic() {
  const audio1 = new Audio("music/Confuso.mp3")
  const audio2 = new Audio("music/Lovely.mp3")
  const audio3 = new Audio("music/Star Guitar.mp3")

  let stationNumber = Math.floor(Math.random() * 3) + 1
  
  switch (stationNumber) {
    case 1:
      audio1.play();
      break;
    case 2:
      audio2.play();
      break;
    case 3:
      audio3.play();
      break;

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



