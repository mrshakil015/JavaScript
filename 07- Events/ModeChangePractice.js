//--Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let modeBtn = document.querySelector("#modeBtn");
let currentMode = "light";
let ele = document.createElement("p");

modeBtn.addEventListener("click",() => {
    if(currentMode === "light"){
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";

        modeBtn.innerHTML = "Dark Mode";

        //Add Element
        ele.innerText = "This is the dark mode"
        ele.style.color = "white";
        document.querySelector("#modeBtn").after(ele);
    }else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";

        modeBtn.innerHTML = "Light Mode";

        //Add Element
        ele.innerText = "This is the light mode"
        ele.style.color = "black";
        document.querySelector("#modeBtn").after(ele);
    }
    console.log(currentMode);    
});

