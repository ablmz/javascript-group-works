/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with
 * the id "return-to-top", when the user scrolled
 * at least the window height
 * 2. when the user clicks the button,
 * scroll the page all the way up to the start
 * 
 */
var scrollbtn=document.querySelector(".visible");
scrollbtn.style.display= "none";

var docElement= document.documentElement;

function buttonshow(){
    var scrollTotal=docElement.scrollHeight - docElement.clientHeight;
    if ((docElement.scrollTop /scrollTotal) > 0.10){
        scrollbtn.style.display="block";   
    } else{
        scrollbtn.style.display= "none";
    }
var btnPercent = 100*docElement.scrollTop /scrollTotal;
scrollbtn.textContent="%"+btnPercent.toFixed(0);
}

document.addEventListener("scroll", buttonshow);
scrollbtn.addEventListener("click",scrolltop);

function scrolltop(){
   console.log("es funktioniert")
    docElement.scrollTo({top:0, behavior:"smooth"})
}

