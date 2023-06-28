import { AxiosInstance } from "axios"
import { defaultAxiosInstance } from "./Api"
import { Reservation } from "../types/Reservation"

/**
 * This Reservation Service Implements the 5 CRUD Methods to
 * Access the Data from Back-end
 * @param api The Axios Object given or default Axios Object
 * @returns a response from the Back-end
 * @author Timofey Makhankov
 * @copyright 2023
 */
const ReservationService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllReservation:async () => {
        const data = await api.get('reservations') // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    },
    getReservationById:async (id: number) => {
        const data = await api.get(`reservations/${id}`) // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    },
    createReservation:async (reservation: Reservation) => {
        const data = await api.post('reservations', reservation) // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    },
    updateReservation:async (id: number, reservation: Reservation) => {
        const data = await api.put(`reservations/${id}`, reservation) // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    },
    deleteReservation:async (id: number) => {
        const data = await api.delete(`reservations/${id}`) // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    }
})

export default ReservationService