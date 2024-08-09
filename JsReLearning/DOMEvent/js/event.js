// Option 1:
function handleOnclick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by function attached on onClick attribute.'
}
// Option 2:
document.getElementById('event-listener').addEventListener('click',function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by Event Listener Button'
})

// Option 2: Recap
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputDisplay = document.getElementById('input-textDisplay');
    inputDisplay.innerText = inputText;
    inputField.value = '';

})