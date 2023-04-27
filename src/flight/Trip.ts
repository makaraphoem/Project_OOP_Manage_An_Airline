import { Booking } from "../booking/Booking";
import { Flight } from "./Flight";

export class Trip{
    flights: Flight[] = [];
    private booking: Booking[] = [];
    setFlight(flight: Flight){
        this.flights.push(flight);
    }
}