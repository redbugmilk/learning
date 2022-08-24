import { transformToNumber } from "./numbers.js";
import { it, expect } from "vitest";

it("should transform numeric string is into a number", () => {
  const input = "1";
  const result = transformToNumber(input);
  expect(result).toBeTypeOf("number");
});
it("should throw a NaN when a string is passed", () => {
  const input = "value";
  const result = transformToNumber(input);
  expect(result).toBeNaN();
});
