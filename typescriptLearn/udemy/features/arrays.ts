// Inference
const cardMakers = ["ford", "porches", "chevy"];
//Annotations
const cardMakers1: string[] = ["ford", "porches", "chevy"];

//Avoid any so don't infer when initialize a variable with empty array
const cardMakers2 = [];
const cardMakers3: string[] = [];

// Inference
const dates = [new Date(), new Date(), new Date()];

const carsByMake = [["a"], ["b"], ["c"]];

const carsByMake1: string[][] = [];

//help with inference when extracting values
const car = cardMakers[0];
const myCar = cardMakers.pop();

//Prevent incompatible values
cardMakers.push(100);

//help with 'map'
cardMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types

const importantDays = [new Date(), "2020-06-05"];
const importantDays1: (Date | string)[] = [new Date(), "2020-06-05"];
importantDays.push(new Date());
importantDays.push("dsf");
importantDays.push(1);

//when to use? Any time we need to represent a collection of records with some arbitrary sort order
