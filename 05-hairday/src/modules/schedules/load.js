import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("date")

export function schedulesDay() {
    // Obtém a data do imput.
    const date = selectedDate.value

    // Renderiz as horas disponíveis.
    hoursLoad({ date })
}