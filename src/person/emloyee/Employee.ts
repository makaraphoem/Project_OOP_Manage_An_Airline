import { Gender, Person } from "../Person";

export class Employee extends Person{
    constructor(firstName: string, lastName: string, age: number, gender: Gender){
        super(firstName, lastName, age, gender);
    }
}