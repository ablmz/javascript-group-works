/**
 * SAVE LIKED PRODUCTS
 * Select all of the like buttons, listen to the click element on every
 * "like-btn" and the save the key of the "like-btn" to the localStorage.
 * Add the class "liked" if the button was clicked.
 * Check on reload if data is stored and add the liked class again
 * 
 * https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
 * 
 */


document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByClassName('like-btn');
  let likeData = loadData();

  if (!likeData) {
    likeData = [];

    for (let i = 0; i < buttons.length; i++) {
      likeData.push(false);  
    }
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      event.preventDefault();
      buttons[i].classList.toggle('liked');
      likeData[i] = !likeData[i];
      saveData();
    });

    if (likeData[i]) {
      buttons[i].classList.add('liked');
    }
  }

  function saveData() {
    localStorage.setItem('like-data', JSON.stringify(likeData));
  }

  function loadData() {
    let data = localStorage.getItem('like-data');
    return JSON.parse(data);
  }

});