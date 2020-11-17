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
//1. Solution
  document.getElementById('menu').classList.toggle('hidden');
  var clsName=document.getElementsById("menu").className;
  console.log(elem);}
  
//add an eventlistener which is triggered by
//click button and runs func. showmenu



/* function showmenu(){ 
  //1. Solution
  document.getElementById('menu').classList.toggle('hidden');

  var clsName=document.getElementsById("menu").className;
  console.log(elem);
   */

/*  var testbool=true;
if (document.getElementById("menu") == testbool){ //we check if the menu id has a class
    var old_class=document.getElementById("menu").className;
    
    document.getElementById("menu").classList.remove("old_class"); //we remove the  
  }
  var element = document.getElementById("menu"); //getting 
  //element.classList.add("hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1");
  element.classList.add("hidden"); */



/* document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass'); */)