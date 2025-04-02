/* ========== MENU SHOW & HIDDEN ========== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ===== Menu Show ===== */
/* validates if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ===== Menu Hidden ===== */
/* validates if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll(".nav__link");
console.log(navLink);
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ========== MENU SHOW & HIDDEN ========== */

/* ========== ACCORDION SKILLS ========== */
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/* ========== PORTFOLIO SWIPER ========== */
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* ========== CHANGE BACKGROUND HEADER ========== */
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ========== SHOW SCROLL UP ========== */
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* ========== DARK THEME ========== */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

const trybetunesImg = document.getElementById("trybetunes__img");
const forumAppImg = document.getElementById("forumapp__img");
const comingsoonImg = document.getElementById("comingsoon__img");
const chatsAppImg = document.getElementById("chatsapp__img");
const duckZeldaImg = document.getElementById("duckzelda__img");
const pongGameImg = document.getElementById("pong__img");
const rickAndMortyImg = document.getElementById("rickandmorty__img");
const fitclubImg = document.getElementById("fitclub__img");

function changePortfolioImages() {
  if (getCurrentTheme() == "dark") {
    forumAppImg.src =
      "https://github.com/user-attachments/assets/33df4e7f-35c8-44cf-8bc1-d27c4c72d004";
    trybetunesImg.src =
      "https://github.com/duarte-dot/image-uploads/assets/78454964/491028e2-b346-4ff7-8713-bdc96c1e88f3";
    comingsoonImg.src =
      "https://github.com/user-attachments/assets/0b682359-cb0a-4638-a0ee-b3a938a643b4";
    chatsAppImg.src =
      "https://github.com/user-attachments/assets/67c46191-018f-4687-908e-942fc09501d3";
    duckZeldaImg.src =
      "https://github.com/user-attachments/assets/6c4a4761-cfb1-47d3-819c-de7e11179679";
    pongGameImg.src =
      "https://github.com/user-attachments/assets/78cc1efd-d632-4a20-99b8-d96e7d9396e9";
    rickAndMortyImg.src =
      "https://github.com/user-attachments/assets/5c334ca1-e6a9-4529-a00f-cd9d3dad68c7";
    fitclubImg.src =
      "https://github.com/user-attachments/assets/f78d3d56-37b4-439c-8fbd-115542df0a89";
  } else {
    forumAppImg.src =
      "https://github.com/user-attachments/assets/33df4e7f-35c8-44cf-8bc1-d27c4c72d004";
    trybetunesImg.src =
      "https://github.com/duarte-dot/image-uploads/assets/78454964/a743e946-ad63-4970-a694-f1c70b6a97b9";
    comingsoonImg.src =
      "https://github.com/user-attachments/assets/0b682359-cb0a-4638-a0ee-b3a938a643b4";
    chatsAppImg.src =
      "https://github.com/user-attachments/assets/67c46191-018f-4687-908e-942fc09501d3";
    duckZeldaImg.src =
      "https://github.com/user-attachments/assets/6c4a4761-cfb1-47d3-819c-de7e11179679";
    pongGameImg.src =
      "https://github.com/user-attachments/assets/78cc1efd-d632-4a20-99b8-d96e7d9396e9";
    rickAndMortyImg.src =
      "https://github.com/user-attachments/assets/5c334ca1-e6a9-4529-a00f-cd9d3dad68c7";
    fitclubImg.src =
      "https://github.com/user-attachments/assets/f78d3d56-37b4-439c-8fbd-115542df0a89";
  }
}

changePortfolioImages();

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  changePortfolioImages();

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
