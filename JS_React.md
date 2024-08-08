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


### JavaScript Events:
+ onchange
+ onClick
+ onMouseover
+ onKeydown
+ onBlur
+ onLoad

**Event Handeler**:<br>
An event handler is a routine that deals with the event allowing a programmer to write code that is executed when the event occurs with the help of event attributes.

**Event Capturing:**<br>
Event capturing is the enents starts from top element to the target element.

**Stop Propagation:**<br>
The stopPropagation() method of the event interface prevents further propagation of the current event in the capturing and building phases.

</details>