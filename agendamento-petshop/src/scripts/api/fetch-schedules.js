import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function fetchSchedules({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)
        const data = await response.json()

        const scheduleDay = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return scheduleDay

    } catch (error) {
        alert("Não foi possível carregar os agendamentos!")
    }
}