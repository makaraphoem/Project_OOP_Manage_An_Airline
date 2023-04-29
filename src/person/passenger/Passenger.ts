import { Person, Gender } from "../Person";

import {Booking} from "../../booking/Booking";
export class Passenger extends Person{

    constructor(firstName: string, lastName: string, age: number, gender: Gender, public bookings: Booking[]=[]){
        super(firstName, lastName, age, gender);
    }
    addBooking(booking: Booking){
        this.bookings.push(booking);
    }
}