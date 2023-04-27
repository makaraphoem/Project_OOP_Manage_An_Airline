export enum SeatType{
    businessClass,
    flexClass,
    basisClass
}
export class Seat{
   private seatNumber: string;
   private seatType: SeatType
    constructor(seatName: string, seatType: SeatType){
        this.seatNumber = seatName;
        this.seatType = seatType;
    }
}