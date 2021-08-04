// DOM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity")
const locationBtnRadios = document.querySelectorAll("[name=location]");
const termsOfUse = document.getElementById("checkbox1");
const form = document.getElementById("form");



// Form part
// Input firstname
firstName.addEventListener("blur", firstNameOk);

function firstNameOk() {
  const alertMsg = document.querySelector(".firstname .alert-msg");
  if (firstName.value.trim().length >= 2) {
    alertMsg.style.display = "none";
    firstName.classList.remove("border-red");
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
  if (lastName.value.trim().length >= 2) {
    alertMsg.style.display = "none";
    lastName.classList.remove("border-red");
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
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  if (email.value.match(mailFormat)) {
    alertMsg.style.display = "none";
    email.classList.remove("border-red");
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
    birthdate.classList.remove("border-red");
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
  if (quantityTournament.value.match(quantityFormat) && quantityTournament.value >= 0) {
    alertMsg.style.display = "none";
    quantityTournament.classList.remove("border-red");
    return true;
  }
  else {
    alertMsg.style.display = "flex";
    quantityTournament.classList.add("border-red");
    return false;
  }
}

//Button radio for location
locationBtnRadios.forEach((locationBtnRadio) => {
  locationBtnRadio.addEventListener("change", locationBtnRadioOk);
})
function locationBtnRadioOk() {
  const alertMsg = document.querySelector(".location .alert-msg");
  const checkboxIconLocation = document.querySelectorAll(".checkbox-label .checkbox-icon");
  const isRadioBtnChecked = Array.from(locationBtnRadios).some((radioBtn) => radioBtn.checked)
  if (isRadioBtnChecked) {
    alertMsg.style.display = "none";
    Array.from(checkboxIconLocation).forEach((checkbox) => {
      checkbox.classList.remove("checkbox-icon-border");
    });
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