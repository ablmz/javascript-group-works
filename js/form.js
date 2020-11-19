/**
 * VALIDATE & SEND FORM
 * 1. Listen to the submit of the form element with the id "support-form"
 * 2. Validate on submit, that:
 *  2.1 the checkbox with the id "input-privacy" is checked
 *  2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input
 * 3. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php
 * 
 * https://github.com/axios/axios
 * 
 */

var submitListener=document.getElementById("support-form");
submitListener.addEventListener("submit", validation);
 
var cars = ["input-fullname", "input-number", "input-email", "input-message"];

function validation(event){
    event.preventDefault();
    console.log(event);
    
    if (document.getElementById("input-privacy").checked !== true) {
        alert("Checkbox must be clicked");
    }else{
        for (var i in cars) {
            if (document.cars[i].checkValidity()) {
                xhttp.open("POST", "https://hsh.blnq.dev/javascript-basics/form-fetch.php", true);
                xhttp.send();
            }else{
                document.getElementById("cars[i]").classList.toggle("border-red-500");
                alert("Alle Felder müssen ausgefüllt werden")
            }
            }
      }
    }