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