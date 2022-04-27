import { primeFactors } from ".";

describe("primeFactors Kata", () => {
  it("1 should return `[]`", () => {
    expect(primeFactors(1)).toEqual([]);
  });
  it("2 should return `[2]`", () => {
    expect(primeFactors(2)).toEqual([2]);
  });
  it("3 should return `[3]`", () => {
    expect(primeFactors(3)).toEqual([3]);
  });
  it("4 should return `[2, 2]`", () => {
    expect(primeFactors(4)).toEqual([2, 2]);
  });
  it("5 should return `[5]`", () => {
    expect(primeFactors(5)).toEqual([5]);
  });
});
