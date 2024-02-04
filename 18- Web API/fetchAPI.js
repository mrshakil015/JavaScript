const URL = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#btn");
const factsPara = document.querySelector("#facts");
const randIdx = Math.floor(Math.random() * 5);
console.log(randIdx);

//-----Using Async-Await------
const getFacts = async () => {
    console.log("Getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    factsPara.innerText = data[randIdx].text;
};
btn.addEventListener("click", getFacts);

//-----Using Promise Chain----
// function getFacts1 (){
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factsPara.innerText = data[randIdx].text;
//     })
// }
// btn.addEventListener("click", getFacts1);

