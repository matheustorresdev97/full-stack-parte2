import { apiConfig } from "./api-config.js";

export async function newSchedule({ id, name, date, service, pet, phone }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, pet, phone, service, date }),
    });
    console.log(response.ok);
  } catch (error) {
    console.log(error);
    alert("It wasn't possible to make the schedule. Try again later");
  }
}
