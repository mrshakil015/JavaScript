// function asyFunc1() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("Success");
//         }, 2000)
//     });
// };

// function asyFunc2() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("Success");
//         }, 2000)
//     });
// };
// console.log("Fetching Data1");
// let promise1 = asyFunc1();
// promise1.then(() => {
//     console.log("Fetching Data2");
//     let promise2 = asyFunc2();
//     promise2.then(() => {});
    
// })

//---Chain of Promise-------
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ",dataId);
            resolve("Success");
        }, 2000);
    });
};

console.log("Getting Data 1...");
getData(1)
.then((res) => {
    console.log("Getting Data 2...");
    return getData(2);
})
.then((res) =>{
    console.log("Getting Data 3...");
    return getData(3);
})
.then((res) => {
    console.log(res);
});