import { Flight } from "./Flight";
import { Layout } from "./Layout"

export class Airplan{
    flights: Flight[]=[];
    layout: Layout[]=[];
    constructor(public numberOfPlan: number){
        this.numberOfPlan = numberOfPlan
    }
    setFlight(flight: Flight){
        this.flights.push(flight);
    }
    setLayout(layout: Layout){
        this.layout.push(layout);
    }
}