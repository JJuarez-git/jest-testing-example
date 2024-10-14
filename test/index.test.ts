import { sum } from "../src/index";

describe("funcion sum", () => {
  test("suma dos numeros positivos", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("suma dos numeros, uno negativo", () => {
    expect(sum(2, -5)).toBe(-3);
  });
});
