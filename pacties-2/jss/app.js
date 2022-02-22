function getComment(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayComment(data))
}

function displayComment(comments){
    const commentContainer = document.getElementById("comment")
    const commentContainerDiv = document.getElementById("commentDiv")
    for(const comment of comments){
        const li =document.createElement('li')
        li.style.color='red'
        li.innerText=`Email: ${comment.email}`
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML=`
        <h1>${comment.name}</h1>
        <p>${comment.body}</p>
        `
        commentContainerDiv.appendChild(div)
        commentContainer.appendChild(li)
        console.log(comment)
    }
    

}
console.log('API')