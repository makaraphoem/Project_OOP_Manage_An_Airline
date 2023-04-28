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
    protected salary: number =0;
    flights: Flight[] = [];
    constructor(public categoryEmployee: EmployeeCategory, firstName: string, lastName: string, age: number, gender: Gender){
        super(firstName, lastName, age, gender);
    }

    setSalary(salary: number){
        this.salary = salary
    }
    getSalary() {
        return this.salary;
    }
    getCategory() {
        return this.categoryEmployee;
    }

    addFlight(flight: Flight){
        this.flights.push(flight);
    }
    getPilot(pilot: Pilot){
        return this.firstName == pilot.firstName && this.lastName == pilot.lastName && this.age == pilot.age;
    }
    
    getFlights (pilot: Pilot, date: DateTime): Flight[]{
        let getAllPilotFlight: Flight[]=[];
        if(this.getPilot(pilot)){
            for(let flight of this.flights){
                if(flight.dateFrom.isEqual(date) || flight.dateTo.isEqual(date)){
                    getAllPilotFlight.push(flight);
                }
            }
        }
        return getAllPilotFlight;
    }  
}