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