/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/
function onSubmit(event) {
    event.preventDefault();
    fetch('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160')
        .then(function(response) {
            console.log(response.status);
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson.main.temp);
            document.querySelector("#marker").innerText = myJson.main.temp;
        });

}

let getForm = document.querySelector("#myForm");
getForm.addEventListener("submit", onSubmit);