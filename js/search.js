/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element,
 * when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */
document.querySelector(".search-btn").addEventListener("click", function1); //we acces the 

function function1(event){
    event.preventDefault();
document.getElementById("searchbar").classList.toggle('hidden');
}

document.getElementById("xbtn").addEventListener("click", function2);

function function2(){
    document.getElementById("searcharea").value="";
}