console.log("hey, I am in an external file")

const doc = document.documentElement
//console.log(doc)

doc.style.fontFamily = "monospace"
doc.style.background = "grey"
doc.style.color = "white"


//access specific elements from the doc

const titlebar = document.documentElement.querySelector("#child-1");
console.log(titlebar.innerHTML);
titlebar.innerHTML ="This is today's landing page";
titlebar.style.fontSize = "20px";

//add elements to the site
let resetButton = document.createElement("button")
titlebar.appendChild(resetButton);
resetButton.innerHTML ="Reset Button";
resetButton.style.float = "right";

//assign an event to my button
resetButton.addEventListener("click", doSomething);

function doSomething(){
    console.log("button has been pressed");
}


const mainText = document.querySelector("p");
mainText.innerHTML =""

const sidebar = document.querySelector("#child-2");


//create form (for user) to fill paragraph
let input = document.createElement("input");

sidebar.appendChild(input);

let submitButton = document.createElement("button");
submitButton.innerHTML = "submit";
sidebar.appendChild(submitButton);

let val = submitButton.addEventListener("click", submitText);

function submitText(){
    let inputText = input.value;
    console.log(inputText);
    mainText.innerHTML += inputText + "";
    input.value = "";

};
