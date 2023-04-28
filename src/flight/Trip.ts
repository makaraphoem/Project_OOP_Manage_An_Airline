import { Booking } from "../booking/Booking";
import { Flight } from "./Flight";

export class Trip{
    flights: Flight[] = [];
    bookings: Booking[] = [];
    addFlight(flight: Flight){
        this.flights.push(flight);
    }
    getFlight(){
        return this.flights;
    }
    addBooking(booking: Booking){
        this.bookings.push(booking)
    }
}