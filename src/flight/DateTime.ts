export class DateTime{
    constructor(public day: number,public month:number, public year:number, public time:number){
        this.day = day;
        this.month = month;
        this.year = year;
        this.time = time;
    }
    isEqual(other: DateTime): boolean {
        return (
          this.day === other.day &&
          this.month === other.month &&
          this.year === other.year
        );
    }
}