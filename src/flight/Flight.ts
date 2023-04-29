import { Meal } from "./Meal"
import { Route } from "./Route";
import { Airplan } from "./Airplane";
import { DateTime } from "./DateTime";
import { Gate } from "../gate/Gate";
export class Flight{
    meals: Meal[]=[];
   airplane: Airplan;
    dateTo: DateTime;
    dateFrom: DateTime;
    departure: Route;
    arrival: Route;
    gate: Gate;

    constructor(public flightNumber: string, airplane: Airplan, dateTo: DateTime, dateFrom: DateTime,
         departure: Route, arrival: Route, gate: Gate){
            this.flightNumber = flightNumber;
            this.airplane = airplane;
            this.dateTo = dateTo;
            this.dateFrom = dateFrom;
            this.departure = departure;
            this.arrival = arrival;
            this.gate = gate;
         }
   addMeal(meal: Meal){
      this.meals.push(meal);
   }
   getMeal(){
      return this.meals;
   }
}