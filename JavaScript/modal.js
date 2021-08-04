function editNav() {
  var x = document.getElementById("myTopnav"); 
  // x will be element with id "myTopnav"
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  // if x has class with the name "topnav" concatenate of class "reponsive" who is in the class "topnav"
  // and apply the style of CSS for max-width: 768px
  // else x will be class with the name "topnav" and apply th estyle of CSS for max-width: 540px
}



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const windowFormSend = document.querySelector(".window-form-send");
const crossClose = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");
const btnClose = document.getElementById("closebtn");



// part modal
// launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Every time we click on modalBtn, launch function launchModal
function launchModal() {
  modalbg.style.display = "block"; 
} // function launchModal makes appear modalbg


// close modal form with the cross
crossClose.addEventListener("click", closeForm);
// When click on crossClose, launch function closeForm
function closeForm() {
  modalbg.style.display = "none";
} // function closeForm makes disappear modalbg


// launch success message when submit form
function displaySuccessMessage() {
  windowFormSend.style.display = "flex";
  modalBody.style.display= "none";
} // function displaySuccessMessage makes appear windowFormSend and disappear modalBody


// When click on button id= closebtn, launch function closeForm 
btnClose.addEventListener("click", closeForm);