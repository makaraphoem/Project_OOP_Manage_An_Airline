
import { Flight } from "../../flight/Flight";
import { Gender } from "../Person";
import { Employee, EmployeeCategory } from "./Employee";

export class Copilot extends Employee{
    constructor(categoryEmployee: EmployeeCategory, firstName: string, lastName: string, age: number, gender: Gender){
        super(categoryEmployee, firstName, lastName, age, gender);
    }

}