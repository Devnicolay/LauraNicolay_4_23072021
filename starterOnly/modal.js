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
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.getElementById("submit-btn");
const cross = document.querySelector(".close");


// Part modal
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
btnSubmit.addEventListener("click", sendFormBtn);

// close modal form
function sendFormBtn() {
  modalbg.style.display = "none";
  alert("Merci! Votre réservation a été reçue.");
}

// close modal event with the cross
cross.addEventListener("click", closeForm);

// close modal form with the cross
function closeForm() {
  modalbg.style.display = "none";
} 