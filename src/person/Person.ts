export enum Gender{
    FEMALE ,
    MALE 
}

export abstract class Person{
    gender: Gender
    constructor(public firstName: string, public lastName: string, public age: number, gender: Gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender
    }
}