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
