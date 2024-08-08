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


// Option 4:

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// Option 4: Another

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.addEventListener('click', function makePurple(){
 document.body.style.backgroundColor = 'purple';
})

// Option 4: Final
//document.getElementById('make-orange').addEventListener('click', function(){})
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})