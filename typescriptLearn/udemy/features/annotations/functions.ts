//Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// Type inference works out on the output, but is better to use it.
const subtract = (a: number, b: number): number => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

//Anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

//void function can return null or undefined
const logger = (message: string): void => {
  console.log(message);
  return null;
};

//only when the function will never return value
const throwError = (message: string): never => {
  throw new Error(message);
};

//although it might not return value if it can return a string it will be typed with returning value string
const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

//although it might not return value if we expect to return nothing it will be typed as void
const throwError2 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//ES2015 syntax - destructuring
const logWeather1 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
