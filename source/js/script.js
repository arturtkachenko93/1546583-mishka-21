// Gamburger

const mobileToogle = document.querySelector(".page-header__toogle-nojs");
const mobileNav = document.querySelector(".header-nav");

mobileToogle.classList.add('page-header__toogle');
mobileNav.classList.add('header-nav--closed');

mobileToogle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileToogle.classList.toggle("page-header__toogle-nojs--opened");
  mobileToogle.classList.toggle("page-header__toogle-nojs--closed");
  mobileNav.classList.toggle("header-nav--closed");
});


// modal

const cartLink = document.querySelector(".product__add-in-basket");
const modal = document.querySelector(".modal__cart");
const overlay = document.querySelector(".page__background-modal");
const buttonCart = document.querySelector(".product-main__button");

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal__cart--opened");
  overlay.classList.add("page__background-modal--show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal__cart--opened");
  overlay.classList.remove("page__background-modal--show");
});

buttonCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal__cart--opened");
  overlay.classList.add("page__background-modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal__cart--opened")) {
      evt.preventDefault();
      modal.classList.remove("modal__cart--opened");
    }
    if (overlay.classList.contains("page__background-modal--show")) {
      evt.preventDefault();
      overlay.classList.remove("page__background-modal--show");
    }
  }
});
