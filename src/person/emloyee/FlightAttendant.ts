import { Gender } from "../Person";
import { Employee } from "./Employee";

export class FlightAttendant extends Employee{
    constructor(firstName: string, lastName: string, age: number, gender: Gender){
        super(firstName, lastName, age, gender);
    }
}