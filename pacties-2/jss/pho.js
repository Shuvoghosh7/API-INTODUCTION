function getPhot(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayPhoto(data))
}
function displayPhoto(photos){
    const photoContainter = document.getElementById("photo")
    for(const photo of photos){
        const div = document.createElement('div')
        div.innerHTML=`
        <img src="${photo.url}">
        `
        photoContainter.appendChild(div)
        console.log(photo)
    }
}