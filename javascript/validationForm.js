// DOM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const locationBtnRadios = document.querySelectorAll("[name=location]");
const termsOfUse = document.getElementById("checkbox1");
const form = document.getElementById("form");

// Form part
// Input firstname
firstName.addEventListener("blur", firstNameCheck);
// When quit field firstName, launch function firstNameCheck
function firstNameCheck() {
  const alertMsg = document.querySelector(".firstname .alert-msg");
  if (firstName.value.trim().length >= 2) {
    // the value of firstName must have 2 caracters or more
    alertMsg.style.display = "none"; // alertMsg does not appear
    firstName.classList.remove("border-red"); // remove the class "border-red"
    return true;
  } else {
    alertMsg.style.display = "flex"; // alertMsg appear
    firstName.classList.add("border-red"); // add the class "border-red"
    return false;
  }
}

// Input lastname
lastName.addEventListener("blur", lastNameCheck);
// When quit field lastName, launch function lastNameCheck
function lastNameCheck() {
  const alertMsg = document.querySelector(".lastname .alert-msg");
  if (lastName.value.trim().length >= 2) {
    // the value of lastName must have 2 caracters or more
    alertMsg.style.display = "none";
    lastName.classList.remove("border-red");
    return true;
  } else {
    alertMsg.style.display = "flex";
    lastName.classList.add("border-red");
    return false;
  }
}

// Input email
email.addEventListener("blur", emailCheck);
// When quit field email, launch function emailCheck
function emailCheck() {
  const alertMsg = document.querySelector(".email .alert-msg");
  const mailFormat =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  // mailFormat is the format that the mail field must have, like letters, numbers, symbols @ letters, numbers .(dot) letters, numbers
  if (email.value.match(mailFormat)) {
    alertMsg.style.display = "none";
    email.classList.remove("border-red");
    return true;
  } else {
    alertMsg.style.display = "flex";
    email.classList.add("border-red");
    return false;
  }
}

// Input birthdate
birthdate.addEventListener("blur", birthdateCheck);
// When quit field birthdate, launch function birthdateCheck
function birthdateCheck() {
  const alertMsg = document.querySelector(".birthdate .alert-msg");
  const birthdateFormat = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  // birthdateFormat is the format that the birthdate field must have, a number format like "0000 - 00 - 00"
  if (birthdate.value.match(birthdateFormat)) {
    alertMsg.style.display = "none";
    birthdate.classList.remove("border-red");
    return true;
  } else {
    alertMsg.style.display = "flex";
    birthdate.classList.add("border-red");
    return false;
  }
}

// Input number of tournaments
quantityTournament.addEventListener("change", quantityTournamentCheck);
// When modify field quantityTournament, launch function quantityTournamentCheck
function quantityTournamentCheck() {
  const alertMsg = document.querySelector(".quantityTournament .alert-msg");
  const quantityFormat = /[0-9]/;
  // quantityFormat is the format that the quantityTournament field must have, a format of number
  if (
    quantityTournament.value.match(quantityFormat) &&
    quantityTournament.value >= 0
  ) {
    alertMsg.style.display = "none";
    quantityTournament.classList.remove("border-red");
    return true;
  } else {
    alertMsg.style.display = "flex";
    quantityTournament.classList.add("border-red");
    return false;
  }
}

//Button radio for location
locationBtnRadios.forEach((locationBtnRadio) => {
  locationBtnRadio.addEventListener("change", locationBtnRadioCheck);
});
// When modify one of all elements of locationBtnRadios (one of all of six button radio), launch function locationBtnRadioCheck
function locationBtnRadioCheck() {
  const alertMsg = document.querySelector(".location .alert-msg");
  const checkboxIconLocation = document.querySelectorAll(
    ".checkbox-label .checkbox-icon"
  );
  // checkboxIconLocation will be the elements in class "checkbox-icon" that are in "checkbox-label"
  const isRadioBtnChecked = Array.from(locationBtnRadios).some(
    (radioBtn) => radioBtn.checked
  );
  // One of element of array locationBtnRadios (one of six button radio) is checked
  if (isRadioBtnChecked) {
    alertMsg.style.display = "none";
    Array.from(checkboxIconLocation).forEach((checkbox) => {
      checkbox.classList.remove("checkbox-icon-border");
    });
    return true;
  } else {
    alertMsg.style.display = "flex";
    Array.from(checkboxIconLocation).forEach((checkbox) => {
      checkbox.classList.add("checkbox-icon-border");
    });
    return false;
  }
}

// Checkbox terms of use
termsOfUse.addEventListener("change", termsOfUseCheck);
// When modify field termsOfUse, launch function termsOfUseCheck
function termsOfUseCheck() {
  const alertMsg = document.querySelector(".terms-of-use .alert-msg");
  const checkboxIconTerms = document.getElementById("checkbox-icon-terms");
  // checkboxIconTerms will be element with id "checkbox-icon-terms"
  if (termsOfUse.checked) {
    alertMsg.style.display = "none";
    checkboxIconTerms.style.border = "none";
    return true;
  } else {
    alertMsg.style.display = "flex";
    checkboxIconTerms.style.border = "2px solid #e54858";
    return false;
  }
}

// Form validation
form.addEventListener("submit", formValidation);
// When submit form, launch formValidation
function formValidation(event) {
  event.preventDefault(); // action for default of "submit" don't be effected
  const isFirstNameValid = firstNameCheck();
  const isLastNameValid = lastNameCheck(); // variable isLastNameValid will be function lastNameCheck
  const isEmailValid = emailCheck();
  const isBirthdateValid = birthdateCheck();
  const isQuantityTournamentValid = quantityTournamentCheck();
  const isLocationBtnValid = locationBtnRadioCheck();
  const isTermsOfUseValid = termsOfUseCheck();
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityTournamentValid &&
    isLocationBtnValid &&
    isTermsOfUseValid
  ) {
    form.reset();
    displaySuccessMessage();
  }
  // if all fields are valid, reset form and launch function displaySuccessMessage
}
