import { removeSchedule } from "./removing-schedule";
import { editSchedule } from "./edit-schedule";

const schedules = document.querySelectorAll("ul");

schedules.forEach(async (schedule) => {
  schedule.addEventListener("click", async (event) => {
    if (!!event.target.closest("span")) {
      if (event.target.closest("span").classList.contains("remove")) {
        const { id } = event.target.closest("li").dataset;
        if (confirm("Cancel the schedule?")) await removeSchedule(id);
      } else {
        const { id } = event.target.closest("li").dataset;
        await editSchedule(id);
      }
    } else {
      const { id } = event.target.closest("li").dataset;
      await editSchedule(id);
    }
  });
});
