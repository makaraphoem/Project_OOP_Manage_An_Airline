import { Booking } from "../booking/Booking";
import { Flight } from "./Flight";

export class Trip{
    flight: Flight[] = [];
    private booking: Booking[] = [];
}