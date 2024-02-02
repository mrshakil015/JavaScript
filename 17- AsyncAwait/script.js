// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Weather Data");
//             resolve("Success");
//         },2000)
//     });
// }

// async function getWeatherData() {
//     await api(); //1st Call
//     await api(); //2nd Call
// }
// getWeatherData();


//--Another Example--
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ",dataId);
            resolve("Success");
        },2000);
    });
}

async function getAllData() {
    console.log("Getting Data 1");
    await getData(1);
    console.log("Getting Data 2");
    await getData(2);
    console.log("Getting Data 3");
    await getData(3);
}
getAllData();