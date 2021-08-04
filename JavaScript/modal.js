function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const windowFormSend = document.querySelector(".window-form-send");
const crossClose = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");
const btnClose = document.getElementById("closebtn");



// part modal
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form with the cross
crossClose.addEventListener("click", closeForm);

function closeForm() {
  modalbg.style.display = "none";
}

// launch success message when submit form
function displaySuccessMessage() {
  windowFormSend.style.display = "flex";
  modalBody.style.display= "none";
}

// When click on button id= closebtn, launch function closeForm 
btnClose.addEventListener("click", closeForm);