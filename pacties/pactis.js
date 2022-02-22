function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data =>loadUserData(data) )
    
}

function loadUserData(users){
    const ul = document.getElementById('user')
    for(const user of users){
        console.log(user);
        const li =document.createElement('li')
        li.innerText=`ID: ${user.id},  Name: ${user.name} Email: ${user.email}`
        ul.appendChild(li)
    }
}