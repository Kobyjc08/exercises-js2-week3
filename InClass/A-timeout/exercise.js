/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
/*
const body = document.querySelector("body");
function changeColor() {
    body.style.backgroundColor = "red"
}
setTimeout(changeColor, 5000)
*/
const body = document.querySelector("body");
var colors = ["red", "blue", "green", "yellow"];
var counter = 0;

setInterval(function() {
    body.style.backgroundColor = colors[counter];
    counter++;
    if (counter === colors.length) {
        counter = 0;
    }
}, 2000);