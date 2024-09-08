function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    //get the container
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        console.log(todo)
        //create the child element
        const todoDiv = document.createElement('div');
        //set innertext or innerhtml
        todoDiv.innerHTML = `
        <h3>Title: ${todo.title}</h3>
        <p>User ID: ${todo.userId}</p>
        <p>Is completed: ${todo.completed === true ? 'complete' : 'not complete'}
        `;
        //appendchild
        todoContainer.appendChild(todoDiv);
    }
}


loadTodos()