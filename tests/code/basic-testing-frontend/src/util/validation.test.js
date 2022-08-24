import { validateStringNotEmpty, validateNumber } from "./validation.js";
import { it, expect, describe } from "vitest";

describe("validateStringNotEmpty()", () => {
  it("should not throw error if not empty string", () => {
    const input = "not empty";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).not.toThrow();
  });

  it("should throw error if not a string", () => {
    const input1 = [];
    const input2 = null;
    const input3 = {};
    const resultFn1 = () => {
      validateStringNotEmpty(input1);
    };
    const resultFn2 = () => {
      validateStringNotEmpty(input2);
    };

    const resultFn3 = () => {
      validateStringNotEmpty(input3);
    };
    expect(resultFn1).toThrow();
    expect(resultFn2).toThrow();
    expect(resultFn3).toThrow();
  });

  it("should throw error if empty string", () => {
    const input = "";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).toThrow(/Invalid input/);
  });

  it("should throw error if string with only spaces", () => {
    const input = "       ";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).toThrow(/Invalid input/);
  });
});

describe("validateNumber()", () => {
  it("should not throw error if number is passed", () => {
    const input = 1;
    const resultFn = () => {
      validateNumber(input);
    };
    expect(resultFn).not.toThrow();
  });

  it("should throw error if not a number", () => {
    const input = {};

    const resultFn1 = () => {
      validateNumber(input);
    };
    const resultFn2 = () => {
      validateNumber();
    };
    expect(resultFn1).toThrow(/Invalid number input/);
    expect(resultFn2).toThrow(/Invalid number input/);
  });
});
