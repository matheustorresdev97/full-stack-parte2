import { apiConfig } from "../services/api-config.js";
import { daySchedules } from "../modules/load/load-schedules.js";

export async function removeSchedule(id) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    });

    await daySchedules();
    alert("Schedule successfully deleted.");
  } catch (error) {
    console.log(error);
    alert("Schedule not cancelled");
  }
}
