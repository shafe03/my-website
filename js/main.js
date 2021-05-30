"use strict";
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const menuBars = document.querySelectorAll(".bar");

menuBars.forEach((el) => el.classList.remove("change"));

// click navbar to show navbar content in mobile view
const showNavbarContent = () => {
  if (!menuBars[0].classList.contains("change")) {
    menuBars.forEach((el) => {
      el.classList.add("change");
    });
    navbar.style.display = "block";
  } else {
    menuBars.forEach((el) => {
      el.classList.remove("change");
    });
    navbar.style.display = "none";
  }
};

hamburgerMenu.addEventListener("click", showNavbarContent);

console.log(menuBars);
