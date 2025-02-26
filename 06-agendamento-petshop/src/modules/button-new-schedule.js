import { formInputRefresher } from "../modules/date-time.js";

const button = document.querySelector(".button-new-schedule");
const header = document.querySelector("main > header")
const sectionMorning = document.querySelector(".morning");
const sectionAfternoon = document.querySelector(".afternoon");
const sectionEvening = document.querySelector(".evening");
const divOverlay = document.querySelector(".overlay");
const main = document.querySelector("main");

button.addEventListener("click", () => {
  header.classList.add("blur");
  sectionMorning.classList.add("blur");
  sectionAfternoon.classList.add("blur");
  sectionEvening.classList.add("blur");
  button.classList.add("hidden");
  divOverlay.classList.remove("hidden");
  main.classList.add("main-size");

  formInputRefresher();
})