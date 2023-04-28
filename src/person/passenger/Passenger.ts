import { Person, Gender } from "../Person";

import {Booking} from "../../booking/Booking";
export class Passenger extends Person{
    private booking: Booking;
    constructor(firstName: string, lastName: string, age: number, gender: Gender, booking: Booking){
        super(firstName, lastName, age, gender);
        this.booking = booking
    }
    getBooking(){
        return this.booking;
    }
}