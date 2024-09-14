<details>
<summary>About JavaScript</summary>

JavaScript is a-
#### Highly Abstracted:
An abstraction is a way of 
- hiding the implementation details
- showing only the functionality to users

#### Garbage Collection
- JS automatically collects unused data
- free the memory with the help of an algorithm called 'Mark -and - sweep
- THe garbage collector removes all the objects except the marked ones.

#### JIT compiled language:
- JIT (Just in Time)
JS is not a purerly interpreted language
- Modern JS is JIT compiled
- Just-In-Time compiler converts the entir code into machine code and execute them immediately.

#### Multi-Paradigm Language
Paradigm: code structure that will determine the style or a way of programming

-Procedural programming
- Object-Oriented Programming
- Functional Programming

#### Proto-Typed based language:
- In JS, everything (function, array, objects) is object except the primitive data
- A prototypical object is an object used as a template from which to get the initial properties for a new object.
- Proto-type is a blue print

#### Dynamically Typed
- When you declare a variable, you do not need to specify what type this variable is
- JS engine infers what type this variable is based on the value assigned to at run time.
- As JS determines the type at runtime we can re-declare the type


## Execution Context
- An execution context is an environment
- Inside the execution context a piece of JS code gets executed.
- Variables, parameters and other information related to the piece of code get stored in the execution context.

There are two kinds of Execution COntext in Javascript:
- Global Execution Context (GEC)
- Functional Execution Context (FEC)

#### Global Execution Context:
Whenever the JS engine receives a script file, it first create a default Execution Context known as the global execution context(gec).
- GEC is the base/default Execution Context
All JS code that is not inside of a function gets executed.
- For every JS file, there can only be one GEC.


## Single-Threaded
JavaScript is a single-threaded and synchronous language
- Single-threaded means oly one statement is executed at a time.
- JavaScript only hase on e call stack.
- JavaScript runs code line by line.
- Must finish executing a piece of code before moving onto the next.

## Promise
The promise object represents the eventual completion(or failur) of an asynchronous operation and its resulting value. A Promise is in one of these states:

- Pending: initial state, neither fulfilled nor rejected
- Resolve: the operation was completed successfully.
- Reject: the operation failed

## Fetch API
- The fetch() method starts the process of fetching a resource from a server.
- The fetch() method return a Promise that resolves to a Response object
- A fetch() method only rejects when a netwrok error is encountered.


## Async/Await
- `async/await` is a special systax to work with promises in a more confortable way.
- It's surprisingly easy to understand and use.
- The await keywoard can only be used inside an async function
- The await keyword makes the function puse the execution and
- wait for a resolved promise before it continues


## setTimeout() vs setInterval()
- setTimeout(): A time event function to call another function after certain time period but executes the function only once.
- setInterval(): Same as setTimeout() with a slice difference that the execution of the function occurs continuously according to the specified time interval. Here, the time interval works like a gap between the executions.

## LocalStorage:
- localStorage.getItem()
- localStorage.setItem()
- localStorage.removeItem()
- localStorage.clear()
- localStorage.length()

* In local Storage every value store as a string. In localStorage directly we cannot store an Object we need to convert this object into string.
* For convert into string we cannot used toString(). Using JSON.stringify() we can easily convert any object into the string.

</details>

<details>
<summary>JavaScript ES6 Features</summary>

- Arrow Function: It provides a concise syntax for writing functions, especially useful for short,one-line operations.
    ```js
    //ES5 function
    function add(x,y) {
        return x+y;
    }

    //ES6 function
    function add = (x,y) => x+y;
    ```
- **Template Literals:** It allow embedding expressions inside strings, providing a cleaner and more readable way to concatenate strings.
    ```js
    const name = "John";
    const gretting =   `Hello, ${name}!`;
    console.log(greatting);

    //result- Hello, John
    ```
- **Destructuring Assessment:** It simplifies the extraction of values from objects or arrays into individual variables.
    ```js
    const person = {name: "Alice", age:25};

    //Extracting properties
    const {name, age} = person;
    console.log("Name :", name, "Age: ", age);
    //result- Name Alice Age: 25
    ```
- **Spred Operator:** The spread operator allows for the expansionof elements making it handy for creating new arrays or objects based on existing ones.
    ```js
    const numbers = [1,2,3];
    const newNumbers = [...numbers, 4,5];

    console.log("newNumbers : ", newNumbers);
    //result: [1,2,3,4,5]
    ```
- **Async/Await:** Async/await is a syntax for handling a asynchronous code more consisely, providing a cleaner alternative to working with Promise.
    ```js
    const API = "https://api.example.com";
    const fetchData = async () => {
        try {
            const result = await fetch(`${API}/data`);
            const data = await result.json();
            console.log(data);
        }catch (error) {
            console.log(error);
        }
    };
    ```

</details>


<details>
<summary>DOM - Document Object Model</summary>

DOM Defines:
+ The events of all HTML elements
+ The methods to access all HTML elements
+ The properties of all HTML elements
+ All HTML elements as objects

**What can do JavaScript with DOM?**
+ JavaScript can change all the HTML elements in the page.
+ JS can change all the HTML attributes in the page
+ JS can change all the CSS styles in the page
+ JS can remove existing HTML elements and attributes
+ JS can add new HTML elements and attributes
+ JS can react to all existing HTML events in the page

Find the HTML elements in 4 ways:
+ getElementById
    ```js
    const titleId = document.getElementById('idName');
    ```
+ getElementByClassName
    ```js
    const eleClass = document.getElementByClassName('className');
    ```
+ getElementByTagName
    ```js
    const eleTag = document.getElementByTagName('tagName');
    ```
+ querySelector
+ querySelectorAll

### What are events?
+ A special set of objects
+ Gives signal that something has occurred within a website
+ Throught Event listeners, developers run specific code as the event
+ The DOM event model consists of
    + events
    + event listeners
+ The DOM event model provides notifications for certain events.

### JavaScript Events:
+ onchange: A change happened to an HTML element
+ onClick: The user clicks an HTML event
+ onMouseover: The user moves away from an HTML element
+ onKeydown: The user presses a keyboard key
+ onBlur: When an object loses focus
+ onLoad: The broser has finished loading the page

**Event Handeler**:<br>
An event handler is a routine that deals with the event allowing a programmer to write code that is executed when the event occurs with the help of event attributes.

**Event Capturing:**<br>
Event capturing is the enents starts from top element to the target element.

**Stop Propagation:**<br>
The stopPropagation() method of the event interface prevents further propagation of the current event in the capturing and building phases.
**Event Delegation:**<br>
Event Delegation is basically a pattern to handle events efficiently Instead of adding an event listner to each and every similar element, we can add an event listener to a parent element and call an event on a partifular target using the .target propery tof the event object.

</details>

<details>
<summary>JavaScript Arrow Function</summary>

Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

**Ways to write Arrow Function:**
When there is no parameters, there should be as empty paranthesis
```js
const myName = ()=>console.log('Md. Shakil');
```
Usually you don't have to use parenthesis if there is only one parameter.
```js
const square = a=> a*a;
```
Use paranthesis when there is more than one parameter.
```js
const add = (a,b)=> a+b;
```

```js
const add = (a,b) => {

}

```

**Arrow Function vs Regular Function:**
+ If there the arrow function contains one expression you can omit the curly braces, and then the expression will be implicitly returned.
+ In Regular function, you have to use return keyword to retun any value. If you don't return anything then the function return undefined.

</details>

<details>
<summay>Spread Operator</summary>
The JavaScript spread operator(...) allows us to quicky copy all or part of an existing array or object into another array or object.

```js
//Case 1:
var a = ['Rohim','Korim', 'Jodu']; 
console.log(a);
//Result: ['Rohim','Korim', 'Jodu']

//Case 2:
var a = ['Rohim','Korim', 'Jodu']; 
console.log(...a);
//Result: Rohim Korim Jodu
```

</details>

<details>
<summary>Common Interview Questions</summary>

+ What is an api?
+ What are the HTTP methods supported by REST?
+ Can you use GET request instead of PUT or create a resource?
+ What is the difference between PUT and POST?
+ What is JSON?
+ What are CRUD operations?

</details>