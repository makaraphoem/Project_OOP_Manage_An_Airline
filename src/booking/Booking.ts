export class Booking{
    constructor(public name: string, public passport: string, public flightcode: string, public national: string, public amounth: number){
        this.name = name;
        this.passport = passport;
        this.flightcode = flightcode;
        this.national = national;
        this.amounth = amounth;
    }
}