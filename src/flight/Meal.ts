export enum MealType{
    vegetarian,
    glutenFree,
    halal, 
    kosher
}
export class Meal{
    mealName: string;
    mealType: MealType;
    constructor(mealName: string, mealType: MealType){
        this.mealName = mealName;
        this.mealType = mealType;
    }
   
}