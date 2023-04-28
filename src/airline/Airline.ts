import { Airplan } from "../flight/Airplane";
import { Trip } from "../flight/Trip";
import { Gender } from "../person/Person";
import { Copilot } from "../person/emloyee/Copilot";
import { Employee, EmployeeCategory } from "../person/emloyee/Employee";
import { FlightAttendant } from "../person/emloyee/FlightAttendant";
import { Manager } from "../person/emloyee/Manager";

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
    addAirplan(airplan: Airplan){
        this.airplans.push(airplan);
    }
    getPilotFlight(){

    }
   
}

