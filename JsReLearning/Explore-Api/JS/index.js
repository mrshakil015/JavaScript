function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => displayUsersName(data))
}

function displayUsersName(data){
    const ul = document.getElementById('user-namelist');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li); 

    }

    const emailUl = document.getElementById('user-emaillist');
    for(const user of data){
        console.log(user.email);
        const li = document.createElement('li');
        li.innerText = user.email;
        emailUl.appendChild(li);
    }
}

