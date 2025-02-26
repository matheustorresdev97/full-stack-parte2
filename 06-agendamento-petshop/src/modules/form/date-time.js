import dayjs from "dayjs"

const dateTimeSpan = document.querySelectorAll(".input-date span");
const dateInput = document.getElementById("date-form");
const timeInput = document.getElementById("time");

export function formInputRefresher() {
  dateTimeSpan[0].textContent = dayjs().format("MMM DD, YYYY")
  dateTimeSpan[1].textContent = dayjs().format("HH:mm")
  dateInput.min = dayjs().format("YYYY-MM-DD");
  dateInput.value = dayjs().format("YYYY-MM-DD");
  timeInput.value = dayjs().format("HH:mm");
}

dateInput.onchange = () => {
  dateTimeSpan[0].textContent = dayjs(dateInput.value).format("MMM DD, YYYY")
}

timeInput.onchange = () => {
  dateTimeSpan[1].textContent = dayjs().hour(timeInput.value.split(":")[0]).minute(timeInput.value.split(":")[1]).format("HH:mm")
}