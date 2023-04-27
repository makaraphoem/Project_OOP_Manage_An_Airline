import { Airline } from "./airline/Airline";
import { Airplan } from "./flight/Airplane";
import { Booking } from "./booking/Booking";
import { Flight } from "./flight/Flight";
import { DateTime } from "./flight/DateTime";
import { Layout } from "./flight/Layout";
import { Meal } from "./flight/Meal";
import { Route } from "./flight/Route";
import { Seat } from "./flight/Seat";
import { Trip } from "./flight/Trip";
import { Gate } from "./gate/Gate";
import { Gender, Person } from "./person/Person";
import { Airport } from "./Airport";
import { Employee } from "./person/emloyee/Employee";

//Grate Employees
let emplyee = new Employee('phorn', 'So', 20,Gender.FEMALE)
console.log(emplyee);

//Grate Airline
// let airline = new Airline('soo')
// airline.employees()
