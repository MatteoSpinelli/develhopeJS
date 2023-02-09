function setImage(url){
    const img = document.getElementById("img")
    img.src = url
}


fetch("https://dog.ceo/api/breeds/image/random")
    .then(val => val.json())
    .then(json => setImage(json.message))
    .catch(err => console.error(err))