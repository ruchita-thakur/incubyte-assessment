const add = require("./add-string.js");

describe("add", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  it("should return the number itself for a single number string", () => {
    expect(add("5").toBe(5));
  });
});
