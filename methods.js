let isToggled = false;
function toggle() {
  const hr1 = document.getElementById("hr-1");
  const hr2 = document.getElementById("hr-2");
  const hr3 = document.getElementById("hr-3");
  const leftMenu = document.getElementById("left-menu");
  if (!isToggled) {
    hr2.style.opacity = 0;
    hr3.style = `transform-origin: center left;
    transform: rotate(-33deg);`;
    hr1.style = `transform-origin: center left;
    transform: rotate(33deg);`;
    leftMenu.style.transform = `translateX(0)`;
    isToggled = true;
  } else {
    hr2.style.opacity = 1;
    hr3.style.transform = " rotate(0deg)";
    hr1.style.transform = " rotate(0deg)";
    isToggled = false;
    leftMenu.style.transform = `translateX(-110%)`;
  }
}
function showLogin() {
  const loginBlackBack = document.getElementById("login-black-back");
  const loginContainr = document.getElementById("login-container");
  loginBlackBack.classList.add("open");
  loginContainr.classList.add("open-login-container");
  return;
}
function hideLogin() {
  const loginBlackBack = document.getElementById("login-black-back");
  const loginContainr = document.getElementById("login-container");
  loginBlackBack.classList.remove("open");
  loginContainr.classList.remove("open-login-container");
  return;
}
function showCart() {
  const cartBlackBack = document.getElementById("cart-black-back");
  const cartContainer = document.getElementById("cart-container");
  cartBlackBack.classList.add("open-cart-back");
  cartContainer.classList.add("open-cart");
  return;
}
function hideCart() {
  const cartBlackBack = document.getElementById("cart-black-back");
  const cartContainer = document.getElementById("cart-container");
  cartBlackBack.classList.remove("open-cart-back");
  cartContainer.classList.remove("open-cart");
  return;
}

function openSelectCategory() {
  const selectList = document.getElementById("select-category-list");
  selectList.classList.add("open-select-category-list");
  return;
}
function hideSelectCategory() {
  const selectList = document.getElementById("select-category-list");
  selectList.classList.remove("open-select-category-list");
  return;
}
let isSelectToggled = false;
function toggleSelectCategory() {
  if (!isSelectToggled) {
    isSelectToggled = true;
    openSelectCategory();
    return;
  } else {
    isSelectToggled = false;
    hideSelectCategory();
  }
}

function openBrowseCategory() {
  const BrowseCategory = document.getElementById("sub-nav-accordion-sub-menu");
  BrowseCategory.classList.add("open-sub-nav-accordion-sub-menu");
  return;
}
function hideBrowseCategory() {
  const BrowseCategory = document.getElementById("sub-nav-accordion-sub-menu");
  BrowseCategory.classList.remove("open-sub-nav-accordion-sub-menu");
  return;
}
let isBrowseToggled = false;
function toggleBrowseCategory() {
  if (!isBrowseToggled) {
    isBrowseToggled = true;
    document.getElementById("accordionExample").style.borderRadius =
      "25px 25px 0px 0px";
    openBrowseCategory();

    return;
  } else {
    isBrowseToggled = false;
    document.getElementById("accordionExample").style.borderRadius = "25px";
    hideBrowseCategory();
    return;
  }
}
