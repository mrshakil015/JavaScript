//--Handle the Button for onclick()
let btn1 = document.querySelector('#btn1');

btn1.onclick = () => {
    console.log("Button 1 was clicked.");
};

//--Handle the div for onmouseover()
let box1 = document.querySelector('.box1');

box1.onmouseover = () => {
    console.log("You are inside div.")
};
