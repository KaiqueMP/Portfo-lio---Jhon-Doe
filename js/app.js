const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }

  links.forEach((link) => link.addEventListener("click", () => closeMenu()))
});


//Animações de entrada com a biblioteca Scroll Reveal

window.sr = ScrollReveal();

 sr.reveal('.column-1', {
  duration: 3000,
  origin: 'left',
  distance: '100px'
 });

 sr.reveal('.column-2', {
  duration: 3000,
  origin: 'right',
  distance: '100px'
 });

 sr.reveal('.client', {
  duration: 3000,
  origin: 'top',
  distance: '50px'
 });

 sr.reveal('.projetos', {
  duration: 3000,
  origin: 'top',
  distance: '50px'
 });

 sr.reveal('.depoimentos', {
  duration: 3000
 });

 sr.reveal('.card-1', {
  duration: 3000,
  origin: 'top',
  distance: '50px'
 });

 sr.reveal('.card-2', {
  delay: 500,
  duration: 3000,
  origin: 'top',
  distance: '50px'
 });

 sr.reveal('.card-3', {
  delay: 1000,
  duration: 3000,
  origin: 'top',
  distance: '50px'
 });