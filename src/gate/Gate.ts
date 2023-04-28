import { Flight } from "../flight/Flight";
export class Gate{
    constructor(public gateNumber: number, public arrival: string, public departure: string){
        this.gateNumber = gateNumber;
        this.arrival = arrival;
        this.departure = departure;
    }
}