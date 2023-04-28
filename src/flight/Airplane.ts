import { Flight } from "./Flight";
import { Layout } from "./Layout"

export class Airplan{
    flights: Flight[]=[];
    layouts: Layout[]=[];
    constructor(public airplanName: string){
        this.airplanName = airplanName
    }
    addFlight(flight: Flight){
        this.flights.push(flight);
    }
    addLayout(layout: Layout){
        this.layouts.push(layout);
    }
    getFlight(){
        return this.flights;
    }
    getLayout(){
        return this.layouts;
    }
}