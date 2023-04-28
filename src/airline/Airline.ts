import { Airplan } from "../flight/Airplane";
import { Trip } from "../flight/Trip";
import { Gender } from "../person/Person";
import { Pilot } from "../person/emloyee/Pilot";
import { Copilot } from "../person/emloyee/Copilot";
import { Employee, EmployeeCategory } from "../person/emloyee/Employee";
import { FlightAttendant } from "../person/emloyee/FlightAttendant";
import { Manager } from "../person/emloyee/Manager";
import { DateTime } from "../flight/DateTime";

export class Airline{
    employees: Employee[] = [];
    trips: Trip[] = [];
    airplans: Airplan[] = [];
    constructor(public name: string){
        this.name = name
    }
    addEmployee(emloyee: Employee){
        this.employees.push(emloyee);
    }
    addTrip(trip: Trip){
        this.trips.push(trip);
    }
    getTrip(){
        return this.trips
    }
    addAirplan(airplan: Airplan){
        this.airplans.push(airplan);
    }

    getAllSalaryEmployee(){
        let salary: number = 0
        for(let emloyee of this.employees){
            salary += emloyee.getSalary()  
        }
        return salary
    }
}

