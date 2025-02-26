const button = document.querySelector(".button-new-schedule");
const header = document.querySelector("main > header");
const sectionMorning = document.querySelector(".morning");
const sectionAfternoon = document.querySelector(".afternoon");
const sectionEvening = document.querySelector(".evening");
const divOverlay = document.querySelector(".overlay");
const main = document.querySelector("main");

divOverlay.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("overlay") ||
    event.target.classList.contains("mobile-only")
  ) {
    header.classList.remove("blur");
    sectionMorning.classList.remove("blur");
    sectionAfternoon.classList.remove("blur");
    sectionEvening.classList.remove("blur");
    button.classList.remove("hidden");
    divOverlay.classList.add("hidden");
    main.classList.remove("main-size");
  }
});
