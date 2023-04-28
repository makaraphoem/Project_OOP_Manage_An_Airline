export enum SeatType{
    businessClass,
    flexClass,
    basisClass
}
export class Seat{
    seatNumber: number;
    seatType: SeatType
    constructor(seatNumber: number, seatType: SeatType){
        this.seatNumber = seatNumber;
        this.seatType = seatType;
    }
}