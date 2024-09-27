const add = require("./add-string");

describe("add", () => {
  it("should return 0 if input is an empty string", () => {
    expect(add("").toBe(0));
  });
});
