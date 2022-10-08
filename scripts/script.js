const mobileBtn = document.getElementById("mobile-cta");
const mobileBtnExit = document.getElementById("mobile-exit");
const nav = document.querySelector("#nav");

mobileBtn.addEventListener("click", () => {
  console.log("clicked");
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

document.querySelectorAll(".form-item .input-element").forEach((inpEl) => {
  inpEl.addEventListener("input", () => {
    if (inpEl.value.trim() === "") {
      inpEl.parentElement.classList.add("form-error");
    } else {
      inpEl.parentElement.classList.remove("form-error");
    }
  });
});
