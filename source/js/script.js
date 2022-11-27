// mobileMenu

var siteNavigationDropdown = document.querySelector(".site-navigation__dropdown");
var siteNavigationList = document.querySelector(".site-navigation__list");
let windowInnerWidth = window.innerWidth;


siteNavigationDropdown.classList.remove("site-navigation__dropdown--none");
if (windowInnerWidth < 768) {
  siteNavigationList.classList.add("site-navigation__list--close");

}
else {

  siteNavigationDropdown.classList.remove("site-navigation__dropdown--burger");
  siteNavigationDropdown.classList.add("site-navigation__dropdown--cross");
}


siteNavigationDropdown.addEventListener("click", function () {
  if (siteNavigationDropdown.classList.contains("site-navigation__dropdown--burger")) {
    siteNavigationList.classList.remove("site-navigation__list--close");
    siteNavigationDropdown.classList.remove("site-navigation__dropdown--burger");
    siteNavigationDropdown.classList.add("site-navigation__dropdown--cross");

  }

  else {
    siteNavigationList.classList.add("site-navigation__list--close");
    siteNavigationDropdown.classList.remove("site-navigation__dropdown--cross");
    siteNavigationDropdown.classList.add("site-navigation__dropdown--burger");
  }

});



// formPopup

let popupErr = document.querySelector(".popup--error");
let popupSuccess = document.querySelector(".popup--success");
let buttonSubmit = document.querySelector(".review-form__button");
let buttonErr = document.querySelector(".popup__button--err");
let buttonSuccess = document.querySelector(".popup__button--success");


let firstName = document.querySelector(".firstname");
let secondName = document.querySelector(".secondname");
let tel = document.querySelector(".review-form__input--tel");
let email = document.querySelector(".review-form__input--email");
let message = document.querySelector(".review-form__textarea");




buttonSubmit.addEventListener("click", function (evt) {
  if ((!firstName.value) || (!secondName.value) || (!tel.value) || (!email.value) || (!message.value)) {
    evt.preventDefault();

    firstName.classList.add("review-form__input--field-error");
    secondName.classList.add("review-form__input--field-error");
    tel.classList.add("review-form__input--field-error");
    email.classList.add("review-form__input--field-error");
    message.classList.add("review-form__input--field-error");


    popupErr.classList.add("popup--show");
    buttonErr.addEventListener("click", function () {
      popupErr.classList.remove("popup--show");
    });
  }
  else {
    evt.preventDefault();

    firstName.classList.remove("review-form__input--field-error");
    secondName.classList.remove("review-form__input--field-error");
    tel.classList.remove("review-form__input--field-error");
    email.classList.remove("review-form__input--field-error");
    message.classList.remove("review-form__input--field-error");


    popupSuccess.classList.add("popup--show");


  }
}

);
