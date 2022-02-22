function photoAlbume (){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => showPhoto(data))
}
photoAlbume ()

function showPhoto(photos){
    const photoContainer = document.getElementById('picture')
    for(const photo of photos){
        const div = document.createElement('div')
        div.classList.add('photo')
        div.innerHTML=`
        <h1>ID: ${photo.id},Title: ${photo.title}</h1>
        <h1></h1>
        
        `
        photoContainer.appendChild(div)
        console.log(photo)
    }
}