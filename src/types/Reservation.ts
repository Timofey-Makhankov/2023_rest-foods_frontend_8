/**
 * A Type with all properties of a Reservation
 * @author Timofey Makhankov
 * @copyright 2023
 */
export interface Reservation {
    id: number,
    seats: number,
    reservationDate: Date,
    reservationName: string,
    phoneNumber: string,
    tableId: number
}