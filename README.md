# **Learn JavaScript**
<details>
<summary>Function is JavaScript</summary>
<br>
A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

+ Function Used for reduced the redundancy.

**Define Function:**
```js
function functionName(){
    //do some work
}

//Example
function myFunction() {
    console.log("Welcome to CodeMod.");
    console.log("We are learning JS");
}
myFunction();
```
```js
function functionName(param1,param2..){
    //do some work
}

//Example
let message = "My name is Shakil."
function withParameter(message){
    console.log(message);
}
withParameter(message);
```
**Function Call:**
```js
functionName();
```
</details>

<details>
<summary>Methods in JavaScript</summary>
<br>

+ forEach
+ Map
+ **Filter:** Creates a new array of elements that give true for a condition/filter.
  Eg: all Even elements
+ **Reduce:** Performs some operations & reduces the array to a single value. It returns that single value.
</details>

<details>

  <summary>DOM in JS</summary>

  When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

  ### **DOM Manipulation:**
    ---
    Inside the DOM tree there are 3 types of nodes are available:

    + Text nodes
    + Comment nodes
  + Elements node
  </br>**DOM Tree Representation**
  + <code>document</code>
    + <code>Root Element(html)</code>
      + <code>Element(head)</code>
        + <code>Element(title)</code>
      + <code>Element(body)</code>
        + <code>Element(h1)</code>
        + <code>Element(a)</code>
        + <code>Element(p)</code>
  </br>
  + #### **Elements:**
    + Selecting with ID
      ```js
      document.getElementById("IdName");
      ```
    + Selecting with Class
      ```js
      document.getElementById("ClassName");
      ```
    + Selecting with Query Selector
      ```js
      document.querySelector("myId/myClass/tag");
      //return first element

      document.querySelectorAll("myId/myClass/tag");
      //return a NodeList
      ```
  + #### **Properties:**
    Using the DOM properties we can get and set the values of elements.
    + <code>**tagName:**</code> return tag for element nodes
      ```js
      let ele = document.querySelector("h1");
      console.log(ele.tagName);
      ```
    + <code>**innerText:**</code> returns the text content of the element and all its children.
    + <code>**innerHTML:**</code> The Element property innerHTML gets or sets the HTML contained within the element. It returns the plain text or HTML contents in the element.
      + Get the HTML content of an elements:
          ```js
          let myhtml = document.getElementById("myId").innerHTML;
          ```
      + Change the HTML content of an element:
          ```js
          document.getElementById("myId").innerHTML = "I have changed!";
          ```
      + Delete the HTML content of a element:
          ```js
          document.getElementById("myId").innerHTML = "";
          ```
    + <code>**textContent:**</code> returns textual content even for hidden elements.
  + **Attributes:**
    + <code>node.style:</code> The style property returns the values of an element's style attribute.
      ```js
      //Change the color of <p> tag text.
      let elements = document.querySelector("p");
      elements.style.color = "red";

      //Change the background color
      document.querySelector("div").style.background="red";

      //Access by ID 
      document.getElementById("btn").style.background="green";
      ```
    + <code>node.classList.add():</code> Used to add the CSS attribute class into any node.
      ```js
      let myP = document.querySelector('.myP');
      myP.classList.add("newClass");
      ```
  + **Create Element:**
    + <code>node.createElement(ele):</code> Create new element inside any node in JS.
      ```js
      let newHeading = document.createElement("h1");
      newHeading.innerHTML = "Hi, This is Prepend";
      ```
  + **Insert Elements:**
    + <code>node.append(el):</code>Add the element at the end of node inside any element.
      ```js
      //Add new button inside the div
      let div = document.querySelector("div");
      div.append(newBtn);
      ```
    + <code>node.prepend(el):</code>Add the element at the start of node inside any element.
      ```js
      //Add heading inside the body
      let newHeading = document.createElement("h1");
      newHeading.innerHTML = "Hi, This is Prepend";

      document.querySelector("body").prepend(newHeading);
      ```
    + <code>node.before(el):</code> Add the element before any node
      ```js
      //---Add element at the before of any node 
      let newBtn = document.createElement("button");
      newBtn.innerText = "Add Before!";

      document.querySelector("div").before(newBtn);
      ```
    + <code>node.after(el):</code> Add the element after any node
      ```js
      //---Add element at the after of any node 
      let newBtn = document.createElement("button");
      newBtn.innerText = "Add After!";

      document.querySelector("div").after(newBtn);
      ```
  + **Delete Element:**
    + <code>node.remove(el):</code> Used to remove any node into the javascript.
      ```js
      let pRem = document.querySelector("div");
      pRem.remove();
      ```
</details>

<details>
<summary>Event in JS</summary>

  The change in the state of an object is known as an Event. Events are fired to notify code of "interesting changes" that may affect code execution.

  + Mouse Events (click, double click etc.)
  + Keyboard events (keypress, keyup, keydown)
  + Form events (submit etc).
  + Print event & many more

  ### **Sepecial Point:**
  ---
  + When using inline event handling (define directly into the HTML) and a JavaScript event handler for the same event, the JavaScript event handler will take precedence and be executed. 
### **Event Handling:**
---
+ <code>onclick():</code> The onclick() event handler in JavaScript is used to execute code or functions when a user clicks on a specified HTML element.
  ```js
  //--Handling by JS
  let btn1 = document.querySelector('#btn1');
  btn1.onclick = () => {
      console.log("Button was clicked.");
  };

  //--Method 2 inside HTML
  <button onclick="alert('Button was clicked');">Click me!</button>
  ```
+ <code>ondbclick():</code> This event handler is triggered when a user double-clicks on a specified HTML element.
  ```js
  <button id="myButton" ondblclick="alert('Button was clicked')">Double-click me</button>
  ```
+ <code>onmouseover():</code> This event handler is triggered when the mouse pointer enters the area of a specified HTML element.
  ```js
  let box = document.querySelector('.box');
  box.onmouseover = () => {
      console.log("You are inside div.")
  };

  //--Method 2 inside HTML
  <div onmouseover="console.log('You are inside div')">This is a div area box</div>
  ```
### **Event Object:**
---
It is a special object that has deails about the event. All event handlers have access to the Event Object's properties and methods.
```js
node.event = (e) => {
  //handle here
}

//Example
let btn = document.querySelector("#btn");

btn.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, event.clientY);
}
```

### **Event Listeners:**
---
Event listeners in JavaScript are used to respond to events that occur on HTML elements, such as user interactions like clicks, keypresses, or mouse movements.
+ <code>addEventListner:</code>The addEventListener method is used to attach an event handler function to an HTML element. It takes two main arguments: the type of the event (e.g., 'click', 'keydown', 'mouseover') and the function to be executed when the event occurs.
  ```js
  let btn1 = document.querySelector("#btn1");

  btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked");
  })
  ```
+ <code>Event Object:</code>When an event occurs, a special object called the "event object" is created. It contains information about the event, such as the type of the event, the target element, and any additional data related to the event.
  ```js
  let btn1 = document.querySelector("#btn1");

  btn1.addEventListener("click", (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
  })
  ```
+ <code>removeEventListner:</code>You can remove an event listener using the removeEventListener method. It requires the same arguments as addEventListener: the type of the event and the function reference.
  ```js
  element.removeEventListener('click', myEventHandler);
  ```
</details>

<details>
<summary>Object in JS</summary>

A JavaScript object is an entity having state and behavior (properties and method). JS objects have a special property called prototype.
```js
//Simple object example in js
let person = {
  name: "John",
  age: 30,
  job: "Developer"
};
console.log(person.name);
```
Function inside the object
```js
const myObject = {
    //--Function written method-1
    objFunc() {
        console.log("This is object function.");
    },
    //--Function written method-2
    objFunc2: function () {
        console.log("This is another object function.");
    },
};
console.log(myObject.objFunc());
console.log(myObject.objFunc2());
```
### **Prototype:**
In JavaScript, we can use one object's functions/ methods/ properties in another object by setting it as a prototype.
If objects & prototype have same method, that time object's method will be used.
```js
firstObject.__proto__ == secondObject;
```
</details>

<details>
<summary>Classes in JS</summary>

Class is a program-code template for creating objects. Those objects will have some state (variables) & some behaviour (functions) inside it.
```js
//Structure
class MyClass {
  constructor() {...}
  myMethod() {...}
}

let myObj = new MyClass();
```
Example:
```js
class ToyotaCar {
    start() {
        console.log("Car Start");
    }
    stop() {
        console.log("Car Stop")
    }
}
let fortuner = new ToyotaCar();
console.log(fortuner.start());
```

### **Inheritance:**
---
+ Inheritance is passing down properties & methods from parent class to child class.
+ If child & Parent have same method, childs method will be used.
  ```js
  //Syntax
  class Parent {

  }

  class Child extends Parent {

  }
  ```
  Example:

  ```js
  class Person {
    eat() {
      console.log("Eat");
    }

    slppe() {
      console.log("Sleep");
    }
  }
  //Inherite 
  class Engineer extends Person {
    work() {
      console.log("Solve problems");
    }
  }
  let shakilObj = new Engineer();
  console.log(shakilObj.eat());
  console.log(shakilObj.work());
  ```

### **Super Keyword:**
---
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
</details>

<details>
<summary>Synchronous</summary>

Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
```js
console.log("Print One");
console.log("Print Two");
console.log("Print Three");
```
</details>
<details>
<summary>Asynchronous</summary>
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

```js
console.log("Print One");
console.log("Print Two");

setTimeout(() => {
  console.log("Hello");
}, 4000);

console.log("Print Three");
```
</details>

<details>
<summary>Callback</summary>
A callback is a function passed as an argument to another function.

```js
function myCalculator(num1, num2, callback){
    let sum = num1 + num2;
    if(callback) callback(sum);
}
function myDisplay(result){
    console.log(result);
}
myCalculator(5,6, myDisplay);
```

### **Callback Hell/Nested Callback**
---
In Callback Hell, Nested callbacks stacked below one another forming a pyramid structure. This style of programming becomes difficult to understand & manage.

```js
function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("Data",dataId);
        if (getNextData) getNextData();
    },2000)
}
getData(1, () => {
    getData(2);
});
```
</details>

<details>
<summary>Promises</summary>

Promise is for "eventual" completion of task of  task. It is an object in JS. It is a solution to callback hell. It resolve & reject are callbacks provided by JS.
```js

let myPromise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
  if (operationIsSuccessful) {
    resolve(result);
  } else {
    reject(error);
  }
});

```
There are three states in Promise:
+ **Pending:** This is the initial state. The promise is neither fulfilled nor rejected. It is waiting for the asynchronous operation to complete.
+ **Fulfilled/Resolved:** The asynchronous operation completed successfully, and the promise is fulfilled. Any associated data with the successful operation is passed to the fulfillment handler.
+ **Rejected:** The asynchronous operation encountered an error or was unsuccessful, and the promise is rejected. Any reason or error associated with the failure is passed to the rejection handler.

**Used of Promise**
--
+ <code>**promise.then():** </code> This method is used to attach callbacks that will be invoked when the Promise is fulfilled. 
  ```js
  function getPromise(){
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        resolve("Success");
    });
  };

  let promise = getPromise();
  promise.then(() => {
      console.log("Promise is fullfilled");
  });
  ```
+ <code>**promise.catch():**</code> The catch() method is used to attach a callback that will be invoked only if the Promise is rejected. 
  ```js
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
  ```
### **Promise Chain:**
---
Promise chaining is a technique in JavaScript that involves chaining multiple promises together to handle asynchronous operations in a sequential and organized manner. 
```js
function asyFunc1() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Data 1");
            resolve("Success");
        }, 2000)
    });
};

function asyFunc2() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Data 2");
            resolve("Success");
        }, 2000)
    });
};
console.log("Fetching Data1");
let promise1 = asyFunc1();
promise1.then(() => {
    console.log("Fetching Data2");
    let promise2 = asyFunc2();
    promise2.then(() => {});
    
})
```
Another Example:
```js
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
```
</details>

<details>
<summary>Async-Await</summary>
async function always returns a promise. and await puses the execution of its surrounding async function until the promise is settled.

```js
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ",dataId);
            resolve("Success");
        },2000);
    });
}
//.....Async-Await......
async function getAllData() {
    console.log("Getting Data 1");
    await getData(1);
    console.log("Getting Data 2");
    await getData(2);
    console.log("Getting Data 3");
    await getData(3);
}
getAllData();
```
### **IIFE:**
---
IIFE stands for "Immediately Invoked Function Expression." It is a JavaScript design pattern that involves defining and invoking a function immediately after its creation. After following this method we need to call any function.

```js
(function() {
  // Your code here
})();
```
Example:

```js
(async function() {
    console.log("Getting Data 1");
    await getData(1);
    console.log("Getting Data 2");
    await getData(2);
    console.log("Getting Data 3");
    await getData(3);
})();
```
</details>

<details>
<summary>Fetch API</summary>

+ The Fetch API provides an interface for fetching (sending/receiving) responses. 
+ It uses Request and Response object. 
+ The Fetch() method is used to fetch a resource (data).
+ API stands for Appplication Programming Interface.

**Syntax:**
```js
let promise = fetch(url,[options])
```
### **Understanding Terms:**
---
+ AJAX is Asynchronous JS & XML
+ JSON is JavaScript Object Notation
+ json() method: returns a second promise that resolves with the result of parsing the response body text as JSON. (input is JSON, output is JS object).

### **Requests & Response**
---
**Request:** A request is an action performed by a client to obtain or send data to a server. It is typically initiated by the client when it needs to retrieve information from a server or when it wants to send data to the server.
+ <code>HTTP Verb:</code> The HTTP method or verb indicates the type of operation the client wants to perform. Common HTTP methods include GET (retrieve data), POST (send data to be processed), PUT (update data), DELETE (remove data), and others.
+ <code>URL:</code> The URL specifies the address of the resource on the server that the client wants to interact with. It includes the protocol (e.g., "https://"), domain, path, and possibly query parameters.
+ <code>Headers:</code> Headers provide additional information about the request, such as the type of data the client can accept (Accept header), the format of the data it is sending (Content-Type header), and other metadata.
+ <code>Body:</code> For certain HTTP methods like POST or PUT, the client may include a message body in the request to send data to the server. The body can contain various types of data, such as JSON, form data, or binary content.

</details>