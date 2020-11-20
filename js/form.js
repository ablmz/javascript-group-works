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
/* document.getElementById('support-form').addEventListener('submit', function validation(event) {
    console.log("Deneme");
    event.preventDefault();

    const formData = new FormData(event.target);

    for (var pair of formData.entries()) {
        console.log(pair);
        if (pair == "") {
            document.querySelector("[id="+pair+"]").classList.add("border-red-500");
        }else{
            document.querySelector("[id="+pair+"]").classList.remove("border-red-500");
        }
    }
    if (!document.getElementById("input-privacy").checked){
        alert("Checkbox must be clicked...");
        return false; //formu göndermemesi icin.
    }else{
        const request = new XMLHttpRequest();
        console.log(request);
        request.open("POST", "https://hsh.blnq.dev/javascript-basics/form-fetch.php");
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.DONE) {
            console.log(request.responseText);
            request.send(formData);
                }
            }
        } 

});  
 */

document.addEventListener('DOMContentLoaded', function() {
    let formElement = document.getElementById('support-form');
  
    formElement.addEventListener('submit', function(event) {
      event.preventDefault();
  
      let invalidElements = [];
  
      for (element of this.elements) {
        switch (element.type) {
          case 'checkbox':
            if (!element.checked) {
              invalidElements.push(element);
              element.nextElementSibling.classList.add('text-red-500');
            } else {
              element.nextElementSibling.classList.remove('text-red-500');
            }
            break;
        
          default:
            if (!element.value || element.value == '') {
              element.classList.add('border-red-500');
              invalidElements.push(element);
            } else {
              element.classList.remove('border-red-500');
            }
            break;
        }
      }
  
      if (invalidElements.length == 0) {
        axios.post('https://hsh.blnq.dev/javascript-basics/form-fetch.php', new FormData(this))
        .then(function (response) {
          console.log(response);
          alert(response.data);
        })
        .catch(function (error) {
          alert('Leider gab es einen Fehler.');
        });
      }
      
    });
  });