import dayjs from "dayjs";
import { newSchedule } from "../api/new-schedule";
import { closeOverlay } from "./open-close-form";
import { daySchedules } from "./load-schedules";

const form = document.querySelector("form");

form.onsubmit = async (event) => {
    event.preventDefault();

    try {
        const tutorName = document.getElementById("owner-name").value.trim();
        const petName = document.getElementById("pet-name").value.trim();
        const phoneNumber = document.getElementById("owner-contact").value.trim();
        const service = document.getElementById("service").value.trim();
        const date = document.getElementById("schedule-day").value.trim();
        const hour = document.getElementById("schedule-hour").value.trim();
        const id = Math.random().toString(36).slice(2, 11);

        if (!tutorName || !petName || !phoneNumber || !service || !date || !hour) {
            return alert("Há items a serem preenchidos!")
        }

        const when = dayjs(`${date}T${hour}`)

        await newSchedule({ id, tutorName, petName, phoneNumber, service, when })

        document.getElementById("owner-name").value = ""
        document.getElementById("pet-name").value = ""
        document.getElementById("owner-contact").value = ""
        document.getElementById("service").value = ""
        document.getElementById("schedule-day").value = ""
        document.getElementById("schedule-hour").value = ""

        closeOverlay()
        daySchedules()

    } catch (error) {
        console.log(error)
    }
}