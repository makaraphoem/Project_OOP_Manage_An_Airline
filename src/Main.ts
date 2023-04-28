import { Airline } from "./airline/Airline";
import { Airplan } from "./flight/Airplane";
import { Booking } from "./booking/Booking";
import { Flight } from "./flight/Flight";
import { DateTime } from "./flight/DateTime";
import { Layout } from "./flight/Layout";
import { Meal, MealType } from "./flight/Meal";
import { Route } from "./flight/Route";
import { Seat } from "./flight/Seat";
import { Trip } from "./flight/Trip";
import { Gate } from "./gate/Gate";
import { Gender, Person } from "./person/Person";
import { Airport } from "./Airport";
import { Employee } from "./person/emloyee/Employee";

//Grate Employees
let emplyee = new Employee('phorn', 'So', 20,Gender.FEMALE);
console.log(emplyee);
//Grate Date
let dateTime = new DateTime(28,4,2023,8);
console.log(dateTime);

//Create Meal
let meal = new Meal('Piza', MealType.kosher);
console.log(meal);

