import dayjs from "dayjs";
import { fetchSchedules } from "../api/fetch-schedules";
import { showSchedules } from "../api/show-schedules";

const form = document.querySelector("form");
const selectedDate = document.getElementById("daily-schedules");
const selectedScheduleDate = document.getElementById("schedule-day");
const currentTime = document.getElementById("schedule-hour");
const today = dayjs(new Date()).format("YYYY-MM-DD");
const time = dayjs().format("HH:mm");

selectedDate.value = today;
selectedDate.min = today;

selectedScheduleDate.value = today;
selectedScheduleDate.min = today;

currentTime.value = time;

document.addEventListener("DOMContentLoaded", daySchedules);

export async function daySchedules() {
    const date = selectedDate.value

    const allSchedules = await fetchSchedules({ date })

    showSchedules({ allSchedules })
}

selectedDate.addEventListener("change", daySchedules);