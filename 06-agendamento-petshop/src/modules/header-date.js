import dayjs from "dayjs";

const textDate = document.getElementById("text-date");
const inputDate = document.getElementById("date");

textDate.textContent = dayjs().format("MMM DD, YYYY");
inputDate.min = dayjs().format("YYYY-MM-DD");

inputDate.onchange = () =>
  (textDate.textContent = dayjs(inputDate.value).format("MMM DD, YYYY"));
