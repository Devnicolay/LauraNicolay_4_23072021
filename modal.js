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
const modalBody = document.querySelector(".modal-body");
const btnClose = document.getElementById("closebtn");
const cross = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity")
const locationBtnRadio = document.getElementsByName(".checkbox-input");
const checkboxLocation = document.querySelectorAll(".checkbox-label");
const termsOfUse = document.getElementById("checkbox1");
const form = document.querySelector("form");



// part modal
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
btnSubmit.addEventListener("click", formValidation);

// close modal event with the cross
cross.addEventListener("click", closeForm);

// close modal form with the cross
function closeForm() {
  modalbg.style.display = "none";
}

// close modal form
function sendFormBtn() {
  modalBody.innerHTML = "<div class=window-form-send><p>Merci!</p><p>Votre réservation a été reçue.</p> <button id=closebtn onclick = closeForm() >Fermer</button></div>";
  modalBody.style.color = "white";
}



// Part form
// Input firstname
firstName.addEventListener("blur", firstNameOk);

function firstNameOk() {
  const alertMsg = document.querySelector(".firstname .alert-msg");
  if (firstName.value.length >= 2) {
    alertMsg.style.display = "none";
    firstName.style.border = "none";
  }
  else {
    alertMsg.style.display = "flex";
    firstName.style.border = "2px solid #e54858";
  }
}

  
// Input lastname
lastName.addEventListener("blur", lastNameOk);

function lastNameOk() {
  const alertMsg = document.querySelector(".lastname .alert-msg");
  if (lastName.value.length >= 2) {
    alertMsg.style.display = "none";
    lastName.style.border = "none";
  }
  else {
    alertMsg.style.display = "flex";
    lastName.style.border = "2px solid #e54858";
  }
}

// Input email
email.addEventListener("blur", emailOk);

function emailOk() {
  const alertMsg = document.querySelector(".email .alert-msg");
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  if (email.value.match(mailFormat)) {
    alertMsg.style.display = "none";
    email.style.border = "none";
  }
  else {
    alertMsg.style.display = "flex";
    email.style.border = "2px solid #e54858";
  }
}

// Input birthdate
birthdate.addEventListener("blur", birthdateOk);

function birthdateOk() {
  const alertMsg = document.querySelector(".birthdate .alert-msg");
  const birthdateFormat = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  if (birthdate.value.match(birthdateFormat)) {
    alertMsg.style.display = "none";
    birthdate.style.border = "none";
  }
  else {
    alertMsg.style.display = "flex";
    birthdate.style.border = "2px solid #e54858";
  }
}

// Input number
quantityTournament.addEventListener("change", quantityTournamentOk);

function quantityTournamentOk() {
  const alertMsg = document.querySelector(".quantityTournament .alert-msg");
  if (quantityTournament.value.length = [0-9]) {
    alertMsg.style.display = "none";
    quantityTournament.style.border = "none";
  }
  else {
    alertMsg.style.display = "flex";
    quantityTournament.style.border = "2px solid #e54858";
  }
}

//Button radio for location

function locationBtnRadioOk() {
  const alertMsg = document.querySelector(".location .alert-msg");
  if (locationBtnRadio.checked.length >= 0) {
    alertMsg.style.display = "none";
    checkboxLocation.style.border = "none";
  }
  else {
    alertMsg.style.display = "flex";
    checkboxLocation.style.color = "#e54858";
  }
}

// Terms of use
termsOfUse.addEventListener("change", termsOfUseOk);

function termsOfUseOk(){
  const alertMsg = document.querySelector(".terms-of-use .alert-msg");
  if (termsOfUse.checked) {
    alertMsg.style.display = "none";
  }
  else {
    alertMsg.style.display = "flex";
  }
}

// validation error filed
function errorValidation() {
  firstNameOk()
  lastNameOk()
  emailOk()
  birthdateOk()
  quantityTournamentOk()
  locationBtnRadioOk()
  termsOfUseOk()
}


// Form validation

function formValidation() {
  if (firstNameOk() == true +
      lastNameOk() == true +
      emailOk() == true +
      birthdateOk() == true +
      quantityTournamentOk() == true +
      locationBtnRadioOk() == true +
      termsOfUseOk() == true) {
        validate();
        sendFormBtn();
        form.reset();
      }
  else {
    errorValidation();
  }
}