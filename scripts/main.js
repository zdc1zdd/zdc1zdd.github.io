// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myVariable = "zdd";
// myVariable;
// myVariable = "Chen";
// myVariable;

// // alert("hello!");

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// document.querySelector("html").addEventListener("click",
//     function () {
//         alert("Ouch! Stop poking me!");
//     }
// );

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/头像.png") {
        myImage.setAttribute("src", "images/头像灰.png");
    } else {
        myImage.setAttribute("src", "images/头像.png");
    }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to ZDD's blog, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to ZDD's blog, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
