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
const locationBtnRadio = document.getElementsByName("location");


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


// Part form
// Input firstname
function firstNameOk() {
  firstName.value.length >= 2;
}

// Input lastname
function lastNameOk() {
  lastName.value.length >= 2;
}

// Input email
function emailOk() {
  email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
}

// Input birthdate
function birthdateOk() {
  birthdate.value = [0-9];
}

// Input number
function quantityTournamentOk() {
  quantityTournament.value = [0-9];
}

// Button radio for location
function locationBtnRadioOk(){
  locationBtnRadio.checked = true;
}