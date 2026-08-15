/* ========== MENU SHOW & HIDDEN ========== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

function setMenu(open) {
  navMenu.classList.toggle("show-menu", open);
  if (navToggle) navToggle.setAttribute("aria-expanded", String(open));
}

/* ===== Menu Show ===== */
/* validates if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => setMenu(true));
}

/* ===== Menu Hidden ===== */
/* validates if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => setMenu(false));
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((n) => n.addEventListener("click", () => setMenu(false)));

/* ========== ACCORDION SKILLS ========== */
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  const parent = this.parentNode;
  const wasOpen = parent.classList.contains("skills__open");

  skillsContent.forEach((content) => {
    content.classList.remove("skills__open");
    content.classList.add("skills__close");
    const header = content.querySelector(".skills__header");
    if (header) header.setAttribute("aria-expanded", "false");
  });

  /* clicking the open panel closes it, otherwise open the clicked one */
  if (!wasOpen) {
    parent.classList.remove("skills__close");
    parent.classList.add("skills__open");
    this.setAttribute("aria-expanded", "true");
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
  if (window.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ========== SHOW SCROLL UP ========== */
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (window.scrollY >= 560) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* ========== DARK THEME ========== */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle(darkTheme, isDark);
  themeButton.classList.toggle(iconTheme, isDark);
  themeButton.classList.toggle("uil-moon", !isDark);
  themeButton.setAttribute("aria-pressed", String(isDark));
}

/* saved choice wins, otherwise follow the operating system preference */
const savedTheme = localStorage.getItem("selected-theme");
const prefersDark =
  typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;

applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeButton.addEventListener("click", () => {
  const next = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("selected-theme", next);
});
