/**
 * CSS-ANIMATIONS
 * Toggle the class "hidden" from the element with the id "menu",
 * when the user clicks on the element
 * with the id "menu-btn"
 * 
 */

/* document.querySelector("menu-btn").onclick = showmenu(); */
var btn= document.getElementById("menu-btn"); //a new variable, to call the menu-btn id element
btn.addEventListener("click", function(){

document.getElementById('menu').classList.toggle('hidden');
}



/* document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass'); */)