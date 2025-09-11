import dayjs from "dayjs";

const morning = document.getElementById("morning-period").children[1];
const afternoon = document.getElementById("afternoon-period").children[1];
const night = document.getElementById("night-period").children[1];

export function showSchedules({ allSchedules }) {
    try {

        morning.innerHTML = "";
        afternoon.innerHTML = "";
        night.innerHTML = "";


        allSchedules.sort((a, b) => dayjs(a.when).valueOf() - dayjs(b.when).valueOf());


        allSchedules.forEach((schedule) => {
            const div = document.createElement("div")
            const scheduledInfos = document.createElement("strong")
            const ownerName = document.createElement("span")
            const service = document.createElement("span")
            const remove = document.createElement("p")


            div.setAttribute("id", "scheduled-pet")
            div.setAttribute("class", "flex column")
            scheduledInfos.setAttribute("id", "scheduled-infos")
            ownerName.setAttribute("id", "pet-owner")
            service.setAttribute("id", "service-description")

            div.dataset.id = schedule.id
            scheduledInfos.textContent = dayjs(schedule.when).format("HH:mm") + " " + schedule.petName
            ownerName.textContent = " / " + schedule.tutorName
            service.textContent = schedule.service
            remove.textContent = "Remover agendamento"


            scheduledInfos.append(ownerName)
            div.append(scheduledInfos, service, remove)


            const hour = dayjs(schedule.when).hour()
            if (hour <= 12) {
                morning.appendChild(div)
            } else if (hour > 12 && hour <= 18) {
                afternoon.appendChild(div)
            } else {
                night.appendChild(div)
            }


            const morningChildrens = morning.children.length
            const afternoonChildrens = afternoon.children.length
            const nightChildrens = night.children.length

            if (morningChildrens > 1) {
                for (let i = 0; i < morningChildrens - 1; i++) {
                    morning.children[i].classList.add("border-bottom")
                }
            }
            if (afternoonChildrens > 1) {
                for (let i = 0; i < afternoonChildrens - 1; i++) {
                    afternoon.children[i].classList.add("border-bottom")
                }
            }
            if (nightChildrens > 1) {
                for (let i = 0; i < nightChildrens - 1; i++) {
                    night.children[i].classList.add("border-bottom")
                }
            }
        })
    } catch (error) {
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}