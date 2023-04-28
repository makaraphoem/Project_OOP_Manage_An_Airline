import { Person, Gender } from "../Person";

import {Booking} from "../../booking/Booking";
export class Passenger extends Person{
     booking: Booking;
    constructor(firstName: string, lastName: string, age: number, gender: Gender){
        super(firstName, lastName, age, gender);
    }
    // addBooking(booking: Booking){
    //     this.booking = booking
    // }
    getBooking(){
        return this.booking;
    }
}