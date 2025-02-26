import dayjs from "dayjs"
import { daySchedules } from "./load-schedules";

const textDate = document.getElementById("text-date");
const inputDate = document.getElementById("date");

textDate.textContent = dayjs().format("MMM DD, YYYY");
// inputDate.min = dayjs().format("YYYY-MM-DD")
inputDate.value = dayjs().format("YYYY-MM-DD")
inputDate.onchange = async () => {
  textDate.textContent = dayjs(inputDate.value).format("MMM DD, YYYY")
  await daySchedules()
}