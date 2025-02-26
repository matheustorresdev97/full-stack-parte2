import dayjs from "dayjs";
import { apiConfig } from "../services/api-config.js";

export async function schedulesByDay(date) {
  try {
    // Storage the response given by the API
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);

    // Converts to JSON
    const data = await response.json();

    // Filter schedules according to the day selected
    const dailySchedules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.date, "day");
    });

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("It was not possible to refresh the schedules for the day selected.");
  }
}
