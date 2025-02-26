const button = document.querySelector(".button-new-schedule");
const header = document.querySelector("main > header")
const sectionMorning = document.querySelector(".morning");
const sectionAfternoon = document.querySelector(".afternoon");
const sectionEvening = document.querySelector(".evening");
const divOverlay = document.querySelector(".overlay");
const main = document.querySelector("main");

const buttonSchedule = document.getElementById("schedule-button")
const buttonEdit = document.getElementById("edit-button")

divOverlay.addEventListener("click", (event) => {
  if(event.target.classList.contains("overlay") || event.target.classList.contains("mobile-only")) 
    closeForm()
})

export function closeForm() {
  header.classList.remove("blur");
  sectionMorning.classList.remove("blur");
  sectionAfternoon.classList.remove("blur");
  sectionEvening.classList.remove("blur");
  button.classList.remove("hidden");
  divOverlay.classList.add("hidden");
  main.classList.remove("main-size");

  buttonSchedule.classList.remove("hidden")
  buttonEdit.classList.add("hidden")
}