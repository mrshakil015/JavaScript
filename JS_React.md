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