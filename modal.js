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
const crossClose = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity")
const locationBtnRadio = document.querySelectorAll("[name=location]");
const termsOfUse = document.getElementById("checkbox1");
const form = document.getElementById("form");



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

// lauch success message when submit form
function displaySuccessMessage() {
  modalBody.innerHTML = "<div class=window-form-send><p>Merci!</p><p>Votre réservation a été reçue.</p> <button id=closebtn onclick = closeForm() >Fermer</button></div>";
  modalBody.style.color = "white";
}



// Form part
// Input firstname
firstName.addEventListener("blur", firstNameOk);

function firstNameOk() {
  const alertMsg = document.querySelector(".firstname .alert-msg");
  if (firstName.value.trim().length >= 2) {
    alertMsg.style.display = "none";
    firstName.style.border = "none";
    return true;
  }
  else {
    alertMsg.style.display = "flex";
    firstName.classList.add("border-red");
    return false;
  }
}
 
// Input lastname
lastName.addEventListener("blur", lastNameOk);

function lastNameOk() {
  const alertMsg = document.querySelector(".lastname .alert-msg");
  if (lastName.value.length >= 2) {
    alertMsg.style.display = "none";
    lastName.style.border = "none";
    return true;
  }
  else {
    alertMsg.style.display = "flex";
    lastName.classList.add("border-red");
    return false;
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
    return true;
  }
  else {
    alertMsg.style.display = "flex";
    email.classList.add("border-red");
    return false;
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
    return true;
  }
  else {
    alertMsg.style.display = "flex";
    birthdate.classList.add("border-red");
    return false;
  }
}

// Input number of tournaments
quantityTournament.addEventListener("change", quantityTournamentOk);

function quantityTournamentOk() {
  const alertMsg = document.querySelector(".quantityTournament .alert-msg");
  const quantityFormat = /[0-9]/;
  if (quantityTournament.value.match(quantityFormat)) {
    alertMsg.style.display = "none";
    quantityTournament.style.border = "none";
    return true;
  }
  else {
    alertMsg.style.display = "flex";
    quantityTournament.classList.add("border-red");
    return false;
  }
}

//Button radio for location

function locationBtnRadioOk() {
  const alertMsg = document.querySelector(".location .alert-msg");
  const checkboxIconLocation = document.querySelectorAll(".checkbox-label .checkbox-icon");
  const isRadioBtnChecked = Array.from(locationBtnRadio).some((radioBtn) => radioBtn.checked)
  if (isRadioBtnChecked) {
    alertMsg.style.display = "none";
    return true;
  }
  else {
    alertMsg.style.display = "flex";
    Array.from(checkboxIconLocation).forEach((checkbox) => {
      checkbox.classList.add("checkbox-icon-border");
    });
    return false;
  }
}

// Checkbox terms of use
termsOfUse.addEventListener("change", termsOfUseOk);

function termsOfUseOk(){
  const alertMsg = document.querySelector(".terms-of-use .alert-msg");
  const checkboxIconTerms = document.getElementById("checkbox-icon-terms");
  if (termsOfUse.checked) {
    alertMsg.style.display = "none";
    checkboxIconTerms.style.border = "none";
    return true;
  }
  else {
    alertMsg.style.display = "flex";
    checkboxIconTerms.style.border = "2px solid #e54858";
    return false;
  }
}

// validation error field
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
form.addEventListener("submit", formValidation);

function formValidation(event) {
event.preventDefault();
  const isFirstNameValid = firstNameOk();
  const isLastNameValid = lastNameOk();
  const isEmailValid = emailOk();
  const isBirthdateValid = birthdateOk();
  const isQuantityTournamentValid = quantityTournamentOk();
  const isLocationBtnValid = locationBtnRadioOk();
  const isTermsOfUseValid = termsOfUseOk();
  if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthdateValid && isQuantityTournamentValid && isLocationBtnValid && isTermsOfUseValid) {
        form.reset();
        displaySuccessMessage();
      }
}