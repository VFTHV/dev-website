const mobileBtn = document.getElementById("mobile-cta");
const mobileBtnExit = document.getElementById("mobile-exit");
const nav = document.querySelector("#nav");

mobileBtn.addEventListener("click", () => {
  if (screen.width < 768) {
    nav.classList.add("visible");
  }
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("visible");
});

window.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !mobileBtn.contains(e.target)) {
    nav.classList.remove("visible");
  }
});
