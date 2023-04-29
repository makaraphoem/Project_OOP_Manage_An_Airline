import { Airline } from "./airline/Airline";
import { Gender } from "./person/Person";
import { Copilot } from "./person/emloyee/Copilot";
import { Pilot } from "./person/emloyee/Pilot";
import { EmployeeCategory } from "./person/emloyee/Employee";
import { FlightAttendant } from "./person/emloyee/FlightAttendant";
import { Manager } from "./person/emloyee/Manager";
import { DateTime } from "./flight/DateTime";
import { Route } from "./flight/Route";
import { Meal, MealType } from "./flight/Meal";
import { Flight } from "./flight/Flight";
import { Airplan } from "./flight/Airplane";
import { Gate } from "./gate/Gate";
import { Seat, SeatType } from "./flight/Seat";
import { Layout } from "./flight/Layout";
import { Airport } from "./Airport";
import { Trip } from "./flight/Trip";
import { Booking, TypeBooking } from "./booking/Booking";
import { Passenger } from "./person/passenger/Passenger";


let airport = new Airport("pp");
// airline
let airline = new Airline("PP");
let employee1 = new Pilot(EmployeeCategory.PILOT,"srey nov", "neag", 12, Gender.FEMALE);
let employee2 = new Pilot(EmployeeCategory.PILOT, "srey nov", "na", 12, Gender.FEMALE);
let employee3= new FlightAttendant(EmployeeCategory.FLIGHTATTENDANT, "nimol", "pov", 12, Gender.FEMALE);
let employee4 = new Manager(EmployeeCategory.MANAGER, "srey nov", "nov", 12, Gender.FEMALE)
employee1.setSalary(234);
employee2.setSalary(345);
employee3.setSalary(543);
employee4.setSalary(455);

// date time arrival and departure
let arrival = new DateTime(12, 3, 2023, 12);
let departure = new DateTime(13, 4, 2023, 4);
let routeDeparture = new Route("cambodia", "thailand");
let routeArrival = new Route("thailand", "cambodia");
// meal
let meal1 = new Meal("pizza", MealType.glutenFree);
let meal2 = new Meal("hodot", MealType.halal);

airline.addEmployee(employee1)
airline.addEmployee(employee2)
airline.addEmployee(employee3)


//  flight and gate
let gate = new Gate(12, "", "" )
let airplan = new Airplan("OH-LWP")
let flight1 = new Flight("AY6404", airplan, departure, arrival, routeDeparture, routeArrival, gate)
let flight2 = new Flight("WY6489", airplan, departure, arrival, routeDeparture, routeArrival, gate)
flight1.addMeal(meal1)
flight1.addMeal(meal2)
employee1.addFlight(flight1)
employee2.addFlight(flight1)


// seat
let seatNumber = new Seat(3, SeatType.businessClass);
let layout = new Layout(12, 2);
layout.addSeat(seatNumber);

// airport
airport.addAirline(airline);
airport.addFlight(flight1);
airport.addGate(gate);

let trip1 = new Trip("t001");
let passenger1 = new Passenger("makara", "phoem", 12, Gender.FEMALE)
let booking1 = new Booking(120, 1, trip1, passenger1, TypeBooking.RETURNTICKET )
let booking2 = new Booking(120, 2, trip1, passenger1, TypeBooking.RETURNTICKET )
passenger1.addBooking(booking1)
passenger1.addBooking(booking2)
trip1.addBooking(booking1);     
trip1.addBooking(booking2);     
trip1.addFlight(flight1);
airline.addTrip(trip1);



// console.log(airline.getAllSalaryEmployee());
// console.log(employee1.getFlights(employee1, departure));
// console.log(airport.getMealInFlight("AY6404"));
// console.log(airport.getPassengerReturnTrip("AY6404"));
// console.log(airport.getDetailPassengerTrip(2));
// console.log(passenger1.getGateNumber("AY6404", arrival));










