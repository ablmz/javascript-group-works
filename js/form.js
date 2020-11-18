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
 submitListener.addEventListener("onsubmit", validation);
 
function validation(){
    if (submitListener.privacy.value !==0){
        if (submitListener.fullname.value !==0){
            if (submitListener.number.value !==0){
                if (document.forms[0].fullname.value !==0){
                    if (document.forms.email.value !==0){
    
                        xhttp.open("POST", "https://hsh.blnq.dev/javascript-basics/form-fetch.php", true);
                        xhttp.send();
                    } else{ error;
                    

                    }
            
                }
            }
        }
    }
}

function error(input, message) {
    input.className = 'error'; // show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;

    form input.error {
        border-color: "border-red-500"
    }

    const error = input.previousElementSibling;
error.innerText = message;