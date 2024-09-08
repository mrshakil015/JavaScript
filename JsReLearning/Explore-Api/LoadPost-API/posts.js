function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

/*
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container')
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h4>User: ${post.userId}</h4>
            <h5>Post Title: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
        postDiv.classList.add('post')
        postContainer.appendChild(postDiv);
    }

}

loadPosts();

function deleteAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'DELETE',
    });
}

function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}