import { Flight } from "../../flight/Flight";
import { Gender } from "../Person";
import { Employee, EmployeeCategory } from "./Employee";

export class FlightAttendant extends Employee{
    flights: Flight[] = []
    constructor(categoryEmployee: EmployeeCategory, firstName: string, lastName: string, age: number, gender: Gender){
        super(categoryEmployee,  firstName, lastName, age, gender);
    }
   
}