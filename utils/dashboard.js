"use strict";

Toastify({
    text: `Assalomu alaykum😊
    Admin panel ga xush kelibsiz !`,
    duration: 4000,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, green, greenyellow)",
      fontFamily: "Poppins, sans-serif"
    }
  }).showToast();


const logout = document.querySelector(".dashboard__logout");

const Logout = ()=> {
    localStorage.removeItem("token");
    window.location.href = "../pages/login.html";
};
logout.addEventListener('click' , Logout);


const signout = document.querySelector(".dashboard__signout");

signout.addEventListener("click" , ()=> {
    localStorage.removeItem("token");
    window.location.href = "../index.html";
});


const elMenu = document.querySelector(".dashboard__menu__icon");
const menuElements = document.querySelector(".dashboard__menu__elements");

let isOpen = false;

elMenu.addEventListener("click" , ()=> {
  if(!isOpen) {
    menuElements.innerHTML = `
      <div class="dashboard__menu__element">
        <div class="dashboard__menu__element__icon__and__text">
          <i class="ri-git-repository-line dashboard__menu__element__icon"></i>
          <p class="dashboard__menu__element__text"> Repository </p>
        </div> <!-- dashboard__menu__element__icon__and__text -->

        <div class="dashboard__menu__element__icon__and__text">
          <i class="ri-bar-chart-fill dashboard__menu__element__icon"></i>
          <p class="dashboard__menu__element__text"> Set status </p>
        </div> <!-- dashboard__menu__element__icon__and__text -->

        <div class="dashboard__menu__element__icon__and__text">
          <i class="ri-star-fill dashboard__menu__element__icon"></i>
          <p class="dashboard__menu__element__text"> Star </p>
        </div> <!-- dashboard__menu__element__icon__and__text -->

        <div class="dashboard__menu__element__icon__and__text">
          <i class="ri-settings-2-line dashboard__menu__element__icon"></i>
          <p class="dashboard__menu__element__text"> Settings  </p>
        </div> <!-- dashboard__menu__element__icon__and__text -->
      </div> <!-- dashboard__menu__element -->
    `;
    isOpen = true;
  } else {
    menuElements.innerHTML = "";
    isOpen = false;
  }
});