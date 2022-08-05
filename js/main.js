// document.getElementById("main-content").style.backgroundColor = "#f8ced2";

// let wrappers = document.querySelector(".wrapper");

// wrappers.style.backgroundColor = "#ef4b54";



// const clicker = document.getElementById("clicker");

// function popWhizBang() {
//     alert("hey there!");
//     clicker.style.color = "#ef4be9";
//     clicker.innerHTML = "You did it!"
// }

// clicker.addEventListener("dblclick",popWhizBang);


let button = document.querySelector(".btn");


function poppyBtn() {
    button.classList.toggle("btn-pop");
}

button.addEventListener("click", poppyBtn);