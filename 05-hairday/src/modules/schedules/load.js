import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"
import {schedulesShow} from "../schedules/show.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("date")

export async function schedulesDay (){
    // Obtém a data do imput.
    const date = selectedDate.value

    const dailySchedules = await scheduleFetchByDay({date})

    schedulesShow({dailySchedules})

    // Renderiz as horas disponíveis.
    hoursLoad({date, dailySchedules})
}