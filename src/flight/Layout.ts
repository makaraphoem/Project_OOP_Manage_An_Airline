import { Seat } from "./Seat"

export class Layout{
    seat: Seat[]=[];
    constructor(public numOfRow: number, public numOfCol: number){
        this.numOfRow = numOfRow,
        this.numOfCol = numOfRow
    }
}