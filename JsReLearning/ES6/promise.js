// const getData = new Promise((resolve, reject) => {
//     resolve(434)
// })
// getData.then(data=> console.log(data))

// // Reject
// const getDataReject = new Promise((resolve, reject) => {
//     reject('No data available')
// })
// getDataReject
//     .then(data => console.log(data))
//     .catch(err => console.error('ERR: ',err))

// --Example: --------
const arrived = false
const ride = new Promise ((resolve, reject) =>{
    if(arrived){
        resolve('driver arrived');
    }else {
        reject('driver bailed');
    }
});

ride
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })