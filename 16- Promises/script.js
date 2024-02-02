const myPromise = new Promise((resolve, reject) => {
    console.log("I am promise.");
    // resolve("Success");
    // reject("Error");
  });

function getData(dataId, getNextData) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);
    });
}
getData(123);

//========Used of Promise========
//---promise.then()---------
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        resolve("Success");
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("Promise is fullfilled");
});

//---promise.catch()----
const getPromise2 = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise to check catch.");
        reject("Error occured");
    });
};
let promise2 = getPromise2();
promise2.catch(() => {
    console.log("Promise is rejected");
});
