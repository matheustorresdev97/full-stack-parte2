import dayjs from "dayjs";
import { schedulesByDay } from "../../services/schedules-by-day.js";
import { showSchedules } from "./show-schedules";

// Select the main date input 
const datePicker = document.querySelector("#date")

export async function daySchedules() {
  // Storages the value of the input (the date)
  const daySelected = datePicker.value
  // Waits for the array of object(s) given by the function schedulesByDay
  const schedules = await schedulesByDay(daySelected)

  showSchedules(schedules)
}