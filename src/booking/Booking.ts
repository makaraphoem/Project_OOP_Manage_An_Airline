import { Trip } from "../flight/Trip";
import { Passenger } from "../person/passenger/Passenger";

export enum TypeBooking{
    NOTICKET,
    HAVETICKET
}
export class Booking{
    trip: Trip;
    passenger: Passenger
    constructor(private price: number, public typeBooking: TypeBooking ){
        this.price = price;
        this.typeBooking = typeBooking
    }
    // addPassenger(passenger: Passenger){
    //     this.passenger = passenger;
    // }
    // addTrip(trip: Trip){
    //     this.trip = trip
    // }
}