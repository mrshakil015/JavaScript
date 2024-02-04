let w;

function startWorker(){
    if (typeof Worker !== "undefined"){

        if(typeof w == "undefined"){
            w = new Worker("worker.js");
        }

        //listening for worker events/message
        w.onmessage = function (event) {
            document.getElementById("demo").innerHTML = event.data;
        }
    }else {
        alert("Your browser does not support web worker!");
    }
}

function stopWorker() {
    if (typeof Worker !== "undefined") {
        w.terminate();
        w = undefined;
    }else {
        alert("Your browser does not support web worker!");
    }
}