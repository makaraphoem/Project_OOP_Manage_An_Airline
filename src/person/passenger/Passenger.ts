import { Person, Gender } from "../Person";

export class Passenger extends Person{
    constructor(firstName: string, lastName: string, age: number, gender: Gender){
        super(firstName, lastName, age, gender);
    }
}