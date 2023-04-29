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

// CREATE AIRORT, AIRLINE, TRIP
let airport = new Airport("pp");
let airline = new Airline("PP");
let trip1 = new Trip("t001");

// CREAT EMPLOYEE
let employee1 = new Pilot(EmployeeCategory.PILOT,"srey nov", "neag", 12, Gender.FEMALE);
let employee2 = new Pilot(EmployeeCategory.PILOT, "srey nov", "neag", 12, Gender.FEMALE);
let employee3= new FlightAttendant(EmployeeCategory.FLIGHTATTENDANT, "nimol", "pov", 12, Gender.FEMALE);
let employee4 = new Manager(EmployeeCategory.MANAGER, "srey nov", "nov", 12, Gender.FEMALE)

//  CREATE DATE TIME ARRIVAL AND DEPARTURE
let dateTo1= new DateTime(12, 3, 2023, 12);
let dateTo2 = new DateTime(12, 3, 2023, 12);
let dateFrom1 = new DateTime(10, 2, 2023, 4);
let dateFrom2= new DateTime(10, 2, 2023, 4);
let routeDapature1 = new Route("cambodia", "thailand");
let routeArrival1 = new Route("thailand", "cambodia");

// CREATE MEAL
let meal1 = new Meal("pizza", MealType.glutenFree);
let meal2 = new Meal("hodot", MealType.halal);

//  flight and gate
let gate = new Gate(12, "", "" )
let airplan = new Airplan("OH-LWP")
// CREATE FLIGHT
let flight1 = new Flight("AY640", airplan,  dateTo1, dateFrom1, routeDapature1, routeArrival1, gate);
let flight2 = new Flight("AY6404", airplan,  dateTo1, dateFrom2, routeDapature1, routeArrival1, gate);

// CREATE PASSENGER
let passenger1 = new Passenger("makara", "phoem", 12, Gender.FEMALE);
let passenger2 = new Passenger("sophorn", "teom", 12, Gender.FEMALE);
// CREATE BOOKING
let booking1 = new Booking(120, 1, trip1, passenger1, TypeBooking.RETURNTICKET);
let booking2 = new Booking(120, 2, trip1, passenger2, TypeBooking.RETURNTICKET);


// CREAT SEAT AND LAYOUT
let seatNumber = new Seat(3, SeatType.businessClass);
let layout = new Layout(12, 2);
// ADD SEAT INTO LAYOUT
layout.addSeat(seatNumber);

// ADD EMPLOYEE INTO AIRLINE
airline.addEmployee(employee1);
airline.addEmployee(employee2);
airline.addEmployee(employee3);
airline.addEmployee(employee4);

// ADD MEAL INTO FLIGHT
flight1.addMeal(meal1);
flight1.addMeal(meal2);

// ADD FLIGTH INTO EMPLOYEE;
employee1.addFlight(flight1);
employee2.addFlight(flight2);

// ADD SALARY INTO EMPLOYEE
employee1.setSalary(234);
employee2.setSalary(345);
employee3.setSalary(543);
employee4.setSalary(455);

// ADD BOOKING INTO PASSENGER 
passenger1.addBooking(booking1);
passenger1.addBooking(booking2);

// ADD BOOKING INTO TRIP
trip1.addBooking(booking1);     
trip1.addBooking(booking2);  

// ADD FLIGHT INTO TRIP   
trip1.addFlight(flight1);
trip1.addFlight(flight2);

// ADD TRIP INTO AIRLINE
airline.addTrip(trip1);

// ADD AIRLINE, FLIGHT AND GATE INTO AIRPORT
airport.addAirline(airline);
airport.addFlight(flight1);
airport.addFlight(flight2);
airport.addGate(gate);

// console.log(airline.getAllSalaryEmployee());
console.log(employee1.getFlights(employee1, dateFrom2));
// console.log(airport.getMealInFlight("AY6404"));
// console.log(airport.getPassengerReturnTrip("AY6404"));
// console.log(airport.getDetailPassengerTrip(2));
// console.log(passenger1.getGateNumber("AY6404", dateTo1);










