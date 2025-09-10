import { scheduleDays } from "../schedules/schedule-load";

const selectedDate = document.getElementById("date");

selectedDate.onchange = () => scheduleDays();
