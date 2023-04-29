import { Person, Gender } from "../Person";

import {Booking} from "../../booking/Booking";
import { DateTime } from "../../flight/DateTime";
import { Flight } from "../../flight/Flight";
import { Gate } from "../../gate/Gate";
export class Passenger extends Person{
    constructor(firstName: string, lastName: string, age: number, gender: Gender, public bookings: Booking[]=[]){
        super(firstName, lastName, age, gender);
    }

    addBooking(booking: Booking){
        this.bookings.push(booking);
    }
     
    getGateNumber (flightNumber: string, date: DateTime):Gate[]{
        let allGateNumber:Gate[]=[];
        for(let booking of this.bookings){
            for(let flight of booking.trip.flights){
                if(flight.flightNumber == flightNumber || flight.dateFrom.isEqual(date) || flight.dateTo.isEqual(date)){
                    allGateNumber.push(flight.gate) 
                }
            } 
        }
        return allGateNumber
    }
}