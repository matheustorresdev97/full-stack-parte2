import { apiConfig } from "./api-config"

export async function scheduleRemove({ id }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: "DELETE",
        })
        alert("Agendamento cancelado!")
    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar!")
    }
}