//document.querySelector('button').addEventListener('click', getFetch)

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



