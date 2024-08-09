// step-1: add event listener to the post button
document.getElementById('post-btn').addEventListener('click', function(){
    // step 2: get the comment
    const commentBox = document.getElementById('new-comment');
    const commentText = commentBox.value;

    // step 3: set the comment inside the comment container
    const commentContainer = document.getElementById('commet-container');
    const p = document.createElement('p');
    p.innerText = commentText;
    commentContainer.appendChild(p);

    // step 4: clear the text area
    commentBox.value = '';
    
})