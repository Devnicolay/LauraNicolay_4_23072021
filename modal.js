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
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity")
const locationBtnRadio = document.querySelectorAll(".checkbox-label");
const termsOfUse = document.getElementById("terms");



// part modal
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



// Part form
// Input firstname
firstName.addEventListener("keyup", firstNameOk);

function firstNameOk() {
  const alertMsg = document.querySelector(".firstname .alert-msg");
  if (firstName.value.length >= 2) {
    alertMsg.style.display = "none";
  }
  else {
    alertMsg.style.display = "block";
  }
}
  
// Input lastname
lastName.addEventListener("keyup", lastNameOk);

function lastNameOk() {
  const alertMsg = document.querySelector(".lastname .alert-msg");
  if (lastName.value.length >= 2) {
    alertMsg.style.display = "none";
  }
  else {
    alertMsg.style.display = "block";
  }
}

// Input email
email.addEventListener("keyup", emailOk);

function emailOk() {
  const alertMsg = document.querySelector(".email .alert-msg");
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  if (email.value.match(mailFormat)) {
    alertMsg.style.display = "none";
  }
  else {
    alertMsg.style.display = "block";
  }
}

// Input birthdate
birthdate.addEventListener("change", birthdateOk);

function birthdateOk() {
  const alertMsg = document.querySelector(".birthdate .alert-msg");
  const birthdateFormat = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  if (birthdate.value.match(birthdateFormat)) {
    alertMsg.style.display = "none";
  }
  else {
    alertMsg.style.display = "block";
  }
}

// Input number
quantityTournament.addEventListener("change", quantityTournamentOk);

function quantityTournamentOk() {
  const alertMsg = document.querySelector(".quantityTournament .alert-msg");
  if (quantityTournament.value.length = [0-9]) {
    alertMsg.style.display = "none";
  }
  else {
    alertMsg.style.display = "block";
  }
}

// Button radio for location
locationBtnRadio.addEventListener("click", locationBtnRadioOk);

function locationBtnRadioOk(){
  const alertMsg = document.querySelector(".location .alert-msg");
  if (locationBtnRadio.checked = 1) {
    alertMsg.style.display = "none";
  }
  else {
    alertMsg.style.display = "block";
  }
}

// Terms of use
termsOfUse.addEventListener("click", termsOfUseOk);

function termsOfUseOk(){
  const alertMsg = document.querySelector(".terms-of-use .alert-msg");
  if (termsOfUse.checked) {
    alertMsg.style.display = "none";
  }
  else {
    alertMsg.style.display = "block";
  }
}