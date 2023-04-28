import { DateTime } from "../../flight/DateTime";
import { Flight } from "../../flight/Flight";
import { Gender } from "../Person";
import { Employee, EmployeeCategory } from "./Employee";

export class Pilot extends Employee{

    constructor(categoryEmployee: EmployeeCategory, firstName: string, lastName: string, age: number, gender: Gender){
        super(categoryEmployee, firstName, lastName, age, gender);
    }
}