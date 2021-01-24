const headerNavToggle = document.querySelector(".page-header__toogle");
const headerNav = document.querySelector(".header-nav");

headerNavToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  headerNav.classList.add("header-nav--opened");
});
