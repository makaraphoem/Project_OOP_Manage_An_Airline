import { Meal } from "./Meal"
import { Route } from "./Route";
import { Airplan } from "./Airplane";
import { DateTime } from "./DateTime";
export class Flight{
    meal: Meal[]=[];
    private airplane: Airplan;
    dateTo: DateTime;
    dateFrom: DateTime;
    departure: Route;
    arrival: Route;
    constructor(public flightNumber: number, airplane: Airplan, dateTo: DateTime, dateFrom: DateTime,
         departure: Route, arrival: Route ){
            this.flightNumber = flightNumber;
            this.airplane = airplane;
            this.dateTo = dateTo;
            this.dateFrom = dateFrom;
            this.departure = departure;
            this.arrival = arrival;
         }
}