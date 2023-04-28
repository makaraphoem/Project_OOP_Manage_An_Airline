import { DateTime } from "../../flight/DateTime";
import { Flight } from "../../flight/Flight";
import { Gender, Person } from "../Person";
import { Pilot } from "./Pilot";

export enum EmployeeCategory {
    COPILOT,
    FLIGHTATTENDANT,
    MANAGER,
    PILOT
  }
export class Employee extends Person{
    public salary: number = 0;
    flights: Flight[] = [];
    constructor(public categoryEmployee: EmployeeCategory, firstName: string, lastName: string, age: number, gender: Gender){
        super(firstName, lastName, age, gender);
    }
    setSalary(salary: number){
        this.salary = salary
    }
    addFlight(flight: Flight){
        this.flights.push(flight);
    }

}