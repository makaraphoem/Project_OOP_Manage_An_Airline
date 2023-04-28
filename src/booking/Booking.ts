import { Trip } from "../flight/Trip";
import { Passenger } from "../person/passenger/Passenger";

export class Booking{
    trip: Trip;
    passenger: Passenger
    constructor(private price: number, trip: Trip, passenger: Passenger){
        this.price = price;
        this.trip = trip;
        this.passenger = passenger;
    }
}