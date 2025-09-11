import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { scheduleShow } from "../schedules/schedules-show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function scheduleDays() {
  const date = selectedDate.value;

  const dailySchedules = await scheduleFetchByDay({ date });

  scheduleShow({ dailySchedules });

  hoursLoad({ date, dailySchedules });
}
