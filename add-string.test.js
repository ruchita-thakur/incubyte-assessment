const add = require("./add-string.js");

describe("add", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  it("should return the number itself for a single number string", () => {
    expect(add("1")).toBe(1);
  });
  it("should handle any amount of numbers", () => {
    expect(add("1,5")).toBe(6);
  });
  it("should handle new lines between numbers (instead of commas)", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  it("should throw an exception if negative numbers are passed", () => {
    expect(() => add("1,-2,3,-4")).toThrowError(
      "Negative numbers are not allowed: -2, -4"
    );
  });
  it("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
