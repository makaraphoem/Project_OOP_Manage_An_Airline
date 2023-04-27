import { Flight } from "./Flight";
import { Layout } from "./Layout"

export class Airplan{
    flight: Flight[]=[];
    layout: Layout[]=[];
    constructor(public numberOfPlan: number){
        this.numberOfPlan = numberOfPlan
    }
}