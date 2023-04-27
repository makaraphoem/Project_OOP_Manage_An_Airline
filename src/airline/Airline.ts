import { Trip } from "../flight/Trip";
import { Employee } from "../person/emloyee/Employee";

export class Airline{
    employees: Employee[] = [];
    trips: Trip[] = [];
    constructor(public name: string){
        this.name = name
    }
    setEmployee(emloyee: Employee){
        this.employees.push(emloyee);
    }
    setTrip(trip: Trip){
        this.trips.push(trip);
    }
}