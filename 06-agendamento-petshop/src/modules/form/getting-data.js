import dayjs from "dayjs"
import { newSchedule } from "../../services/new-schedule.js"

const clientName = document.querySelector("#clientName")
const petName = document.querySelector("#petName")
const clientPhone = document.querySelector("#clientPhone")
const serviceInfo = document.querySelector("#serviceInfo")
const dateForm = document.querySelector("#date-form")
const timeForm = document.querySelector("#time")
const button = document.querySelector("button.scheduler-button")

button.addEventListener("click", async () => {
  clientPhone.value = "+55 (00) 99999-9999"
  if (!clientName.value || !petName.value || !serviceInfo.value || !clientPhone.value.includes("(") || !clientPhone.value.includes(")") || !clientPhone.value.includes("-"))
    return alert("Preencha todos os campos com caracteres válidos!")
  else
    await newSchedule({
      "id": dayjs().format("YYMMDDHHmmssSSS"),
      "name": clientName.value,
      "pet": petName.value,
      "phone": clientPhone.value,
      "service": serviceInfo.value,
      "date": dayjs(dateForm.value).hour(timeForm.value.split(":")[0]).minute(timeForm.value.split(":")[1]).format("YYYY-MM-DD"),
      "time": dayjs(dateForm.value).hour(timeForm.value.split(":")[0]).minute(timeForm.value.split(":")[1]).format("HH:mm")
  })
})