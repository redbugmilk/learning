import { add } from "./math.js";
import { expect, it } from "vitest";

it("should add several numbers", () => {
  const numbers = [1, 2, 3];
  const result = add(numbers);
  const expectedResult = numbers.reduce((total, value) => total + value, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provider", () => {
  const input = ["invalid", 1];
  const result = add(input);
  expect(result).toBeNaN();
});

it("should yield a correct  sum if an array of numeric string values is provided", () => {
  const inputs = ["1", "2"];

  const result = add(inputs);
  const expectedResult = inputs.reduce((total, value) => +total + +value, 0);
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it("should throw an error if no valued is passed into the function", () => {
  const resultFn = () => add();
  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => add(num1, num2);
  expect(resultFn).toThrow(/is not iterable/);
});
