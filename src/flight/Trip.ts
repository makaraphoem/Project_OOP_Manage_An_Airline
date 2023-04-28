import { Booking } from "../booking/Booking";
import { Flight } from "./Flight";

export class Trip{
    flights: Flight[] = [];
    private booking: Booking;
    constructor(booking: Booking){
        this.booking = booking;
    }
    addFlight(flight: Flight){
        this.flights.push(flight);
    }
    
    getFlight(){
        return this.flights;
    }
}