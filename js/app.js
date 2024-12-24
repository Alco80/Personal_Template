const navBar = document.querySelector(".nav");
const navIcon = document.querySelector(".mobile-icon");

navIcon.addEventListener("click", () => {
  navBar.classList.toggle("nav--open");
  navIcon.classList.toggle("mobile--open");
});

navBar.addEventListener("click", () => {
  navBar.classList.remove("nav--open");
  navIcon.classList.remove("mobile--open");
});
