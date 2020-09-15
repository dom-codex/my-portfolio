const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
navBtn.addEventListener("click", () => {
  if (navBtn.classList.contains("open")) {
    document.querySelector(".nav").style.transitionDelay = "0.4s";
    nav.classList.remove("show");
    navBtn.classList.remove("open");
  } else {
    navBtn.classList.add("open");
    nav.classList.add("show");
  }
});
