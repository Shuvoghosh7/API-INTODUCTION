function loadData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}

function getUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => displayUser(data))
}
  function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp =>resp.json())
      .then(data =>console.log(data))
  }

  function displayUser(users){
    const ul = document.getElementById('users')
    for(const user of users ){
        console.log(user)
        const li = document.createElement('li')
        li.innerText=`name: ${user.name},ID: ${user.id}, Email: ${user.email}`
        ul.appendChild(li)
    }
  }