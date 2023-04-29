import { Airline } from "./airline/Airline";
import { TypeBooking } from "./booking/Booking";
import { Flight } from "./flight/Flight";
import { Meal } from "./flight/Meal";
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

    getDetailPassengerTrip(){
        for(let airline of this.airlines){
            for(let trip of airline.trips){
                console.log(trip);
                
            }
        }
    }
    getPassengerReturnTrip(): number{
        let countPassengerReturnTrip: number = 0;
        for(let airline of this.airlines){
            for(let trip of airline.trips){
                for(let booking of trip.bookings){
                    if(booking.typeBooking == TypeBooking.RETURNTICKET){
                            countPassengerReturnTrip += 1                        
                    }
                }
            }
        }
        return  countPassengerReturnTrip
    }
   
    getMealInFlight(): Meal[]{
        let allMealInFlight: Meal[]=[];
        for(let flight of this.flights){
            for(let meal of flight.meals){
                  allMealInFlight.push(meal);  
            }
        }
        return allMealInFlight
    }
    getGateIsWait(){

    }
}
