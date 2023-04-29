import { Booking } from "../booking/Booking";
import { Flight } from "./Flight";

export class Trip{
    constructor(
        public tripId: string,
        public flights: Flight[] = [],
        public bookings: Booking[] = []){

    }
    addFlight(flight: Flight){
        this.flights.push(flight);
    }

    addBooking(booking: Booking){
        this.bookings.push(booking)
    }
    // getBooking(other: Booking){
    //     return this.bookings == other.
    // }
}