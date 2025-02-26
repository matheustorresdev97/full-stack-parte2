import { apiConfig } from "./api-config";
import { openForm } from "../modules/buttons/button-new-schedule.js";
import { refreshSchedule } from "./refresh-schedule";
import dayjs from "dayjs";
import { closeForm } from "../modules/buttons/cancel-scheduling";

const clientName = document.querySelector("#clientName")
const petName = document.querySelector("#petName")
const clientPhone = document.querySelector("#clientPhone")
const serviceInfo = document.querySelector("#serviceInfo")
const dateForm = document.querySelector("#date-form")
const timeForm = document.querySelector("#time")

const buttonSchedule = document.getElementById("schedule-button")
const buttonEdit = document.getElementById("edit-button")

export async function editSchedule(id) {
  try {
    // Storage the response given by the API
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`)

    // Converts to JSON
    const schedule = await response.json()

    buttonSchedule.classList.add("hidden")
    buttonEdit.classList.remove("hidden")

    clientName.value  = schedule.name
    petName.value     = schedule.pet
    clientPhone.value = schedule.phone
    serviceInfo.value = schedule.service
    dateForm.value    = schedule.date
    timeForm.value    = schedule.time

    const dateTimeSpan = document.querySelectorAll(".input-date span");
    dateTimeSpan[0].textContent = dayjs(dateForm.value).format("MMM DD, YYYY")
    dateTimeSpan[1].textContent = dayjs().hour(timeForm.value.split(":")[0]).minute(timeForm.value.split(":")[1]).format("HH:mm")

    openForm();

    buttonEdit.addEventListener("click", async () => {
      if (!clientName.value || !petName.value || !serviceInfo.value || !clientPhone.value.includes("(") || !clientPhone.value.includes(")") || !clientPhone.value.includes("-"))
        return alert("Preencha todos os campos com caracteres válidos!")
      else if(confirm("Change schedule?")){
        await refreshSchedule(id, {
          "id": dayjs().format("YYMMDDHHmmssSSS"),
          "name": clientName.value,
          "pet": petName.value,
          "phone": clientPhone.value,
          "service": serviceInfo.value,
          "date": dayjs(dateForm.value).hour(timeForm.value.split(":")[0]).minute(timeForm.value.split(":")[1]).format("YYYY-MM-DD"),
          "time": dayjs(dateForm.value).hour(timeForm.value.split(":")[0]).minute(timeForm.value.split(":")[1]).format("HH:mm")
        })

        closeForm()
     }

    }, { once: true })

  } catch (error) {
    console.log(error)
  }


}