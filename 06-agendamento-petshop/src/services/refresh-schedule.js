import { newSchedule } from "./new-schedule"
import { removeSchedule } from "./removing-schedule"

export async function refreshSchedule(idOld,{ id, name, pet, phone, service, date, time }) {
  try {
    await newSchedule({
      id, name, pet, service, phone, date, time
    })

    await removeSchedule(idOld)
    
  } catch (error) {
    console.log(error)
  }
}