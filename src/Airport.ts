import { Airline } from "./airline/Airline";
import { Flight } from "./flight/Flight";
import { Gate } from "./gate/Gate";

export class Airport{
    airlines: Airline[] = [];
    flights: Flight[] = [];
    gates: Gate[] = [];
    constructor(public name: string){}
    
    addAirline(airline: Airline){
        this.airlines.push(airline);
    }
    addFlight(flight: Flight){
        this.flights.push(flight);
    }
    addGate(gate: Gate){
        this.gates.push(gate);
    }
    getAirline(){
        return this.airlines;
    }
    getFight(){
        return this.flights
    }
    getGate(){
        return this.gates;
    }
    getDetailPassengerTrip(flights: Flight){
        
    }
    getPassengerReturnTrip(){

    }
   
    getMealInFlight(){
        // for(let airline of this.airlines){
        //     console.log(airline);  
        // }
    }
    getGateIsWait(){

    }
}
