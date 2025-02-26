import dayjs from "dayjs";

const textDate = document.getElementById("text-date");
const inputDate = document.getElementById("date");

textDate.textContent = dayjs().format("DD/MM/YYYY");
inputDate.min = dayjs().format("YYYY-MM-DD");

inputDate.onchange = () =>
  (textDate.textContent = dayjs(inputDate.value).format("DD/MM/YYYY"));
