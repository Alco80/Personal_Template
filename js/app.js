const navBar = document.querySelector(".nav");
const navIcon = document.querySelector(".mobile-icon");

// This makes the navbar open and close.
navIcon.addEventListener("click", () => {
  navBar.classList.toggle("nav--open");
  navIcon.classList.toggle("mobile--open");
});

navBar.addEventListener("click", () => {
  navBar.classList.remove("nav--open");
  navIcon.classList.remove("mobile--open");
});
