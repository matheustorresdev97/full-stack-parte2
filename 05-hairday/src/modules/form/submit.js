import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    // Previne o comportamento padrão do formulário.
    event.preventDefault()

    try {
        // Recuperando o nome do cliente.
        const name = clientName.value.trim()

        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        // Recupera o horário selecionado.
        const hourSelected = document.querySelector(".hour-selected")
        console.log(hourSelected)

        // Recupera o horário selecionado.
        if (!hourSelected) {
            return alert("Selecione um horário!")
        }
        // Recupera somente o horário.
        const [hour] = hourSelected.innerText.split(":")

        // Insere a hora na data.
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID.
        const id = new Date().getTime()

        console.log({
            id,
            name,
            when,
        })

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }

}