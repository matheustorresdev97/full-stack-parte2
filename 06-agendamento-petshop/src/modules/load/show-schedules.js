const ulMorning = document.querySelector("section.morning ul")
const ulAfternoon = document.querySelector("section.afternoon ul")
const ulEvening = document.querySelector("section.evening ul")

export function showSchedules(schedules) {
  schedules.sort((a,b)=>{
    return a.time.localeCompare(b.time);
  })

  ulMorning.innerHTML = ""
  ulAfternoon.innerHTML = ""
  ulEvening.innerHTML = ""

  schedules.forEach((schedule) => {
    const spanTime = document.createElement("span")
    spanTime.classList.add("label-md")
    spanTime.classList.add("content-primary")
    spanTime.textContent = schedule.time

    const spanNames = document.createElement("span")
    spanNames.classList.add("pg-md")
    spanNames.innerHTML = `<strong class="label-md content-primary">${schedule.pet}</strong> / ${schedule.name}</span>`

    const spanInfo = document.createElement("span")
    spanInfo.classList.add("pg-md")
    spanInfo.textContent = schedule.service

    const spanRemove = document.createElement("span")
    spanRemove.classList.add("remove")
    spanRemove.classList.add("pg-md")
    spanRemove.classList.add("content-tertiary")
    spanRemove.textContent = "Remove schedule"

    const item = document.createElement("li")
    item.setAttribute("data-id", schedule.id)
    item.append(spanTime, spanNames, spanInfo, spanRemove)

    if (Number(schedule.time.split(":")[0]) < 13)
      ulMorning.appendChild(item)
    else if (Number(schedule.time.split(":")[0]) < 18)
      ulAfternoon.appendChild(item)
    else
      ulEvening.appendChild(item)
  })
}