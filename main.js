
// Got the code from the W3 website... https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// i modified the navbar to change colors when highlighted, rounded the button more and added a action to each button.

// this is a function that works on scroll. its sets the navbar/#header(id) to sticky once passed a certain part of the page and stickys it as you scroll down the page.


window.onscroll = function() {myFunction()};

let header = document.getElementById("header");

let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } 
  else {
    header.classList.remove("sticky");
  }
}