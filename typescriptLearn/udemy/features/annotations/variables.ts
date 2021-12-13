let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = null;

//built in objects

let now: Date = new Date();

//Array
let colors: string[] = ["red", "blue"];
let myNumbers: number[] = [1, 2];

let truths: boolean[] = [true, false, false];

//Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Annotations for a Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the "any" type

const json = '{"x:10, "y: 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line
// and initalizate it later

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element === "green") {
    foundWord = true;
  }
}

// 3) variavle whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > 0) {
    numberAboveZero = element;
  }
}
