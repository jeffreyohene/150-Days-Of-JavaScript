/* 
Copy the example above into files on your own computer. To make it work you’ll need to supply the rest of the 
HTML skeleton and either link your JavaScript file, or put the JavaScript into a script tag on the page. 
Make sure everything is working before moving on!

Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

- a <p> with red text that says “Hey I’m red!”
- an <h3> with blue text that says “I’m a blue h3!”
- a <div> with a black border and pink background color with the following elements inside of it:
- another <h1> that says “I’m in a div”
- a <p> that says “ME TOO!”

Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const container = document.querySelector("#container");

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I\'m red!";

const heading = document.createElement('h3');
heading.textContent = "Hey I\'m a blue h3!";
heading.style.color = "blue";

const div = document.createElement('div');
const divHeader = document.createElement('h1');
const divParagraph = document.createElement('p');


divHeader.textContent = "I\'m in a div";
divParagraph.textContent = "ME TOO!";

div.appendChild(divHeader);
div.appendChild(divParagraph);

container.appendChild(paragraph);
container.appendChild(heading);
container.appendChild(div);