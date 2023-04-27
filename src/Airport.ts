import { Airline } from "./airline/Airline";
import { Flight } from "./flight/Flight";
import { Gate } from "./gate/Gate";

export class Airport{
    airlines: Airline[] = [];
    flights: Flight[] = [];
    gates: Gate[] = [];
    constructor(public name: string){}
    
    setAirline(airline: Airline){
        this.airlines.push(airline);
    }
    setFlight(flight: Flight){
        this.flights.push(flight);
    }
    setGate(gate: Gate){
        this.gates.push(gate);
    }
}