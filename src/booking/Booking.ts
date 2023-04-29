import { Trip } from "../flight/Trip";
import { Passenger } from "../person/passenger/Passenger";

export enum TypeBooking{
    RETURNTICKET,
    NORETURNTICKET
}
export class Booking{
    constructor(
        private price: number,
        public trip: Trip, 
        public passenger: Passenger,
        public typeBooking: TypeBooking ){}

}