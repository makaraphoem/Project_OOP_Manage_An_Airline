import { Trip } from "../flight/Trip";

export class Booking{
    trip: Trip;
    constructor(private price: number, trip: Trip){
        this.price = price;
        this.trip = trip;
    }
}