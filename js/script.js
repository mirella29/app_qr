/*
aDD EVENT LISTENER ON MULTIPLE ELEMENTS
*/

const addEventOnElements = function ( elements, eventype, callback);

for (let i=0, len = elements.lenght; i < len; i++){
    elements[i].addEventListener (eventype, callback); 0
}


/**
 * MOBILE NAVBAR TOGGLER
 *  */


const navbar= document.querySelector("[data-navbar]");
const navTooglers = document.querySelectorAll("[data-nav-toogler]");

const toogleNav = () => navbar.classList.toggle("active");


addEventOnElements (navTogglers, "click", toggleNav); 
