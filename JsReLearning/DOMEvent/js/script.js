// Option 1: directly set on the HTML element

// Option 2: Add on click function
function makeRed(){
    document.body.style.backgroundColor='red';
}

// Option 3: Another Option
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}

// Another Option
const greenButton = document.getElementById('make-green');
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
}