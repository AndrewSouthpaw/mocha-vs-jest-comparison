import { assert } from "chai";

describe("foo", () => {
  it("should return foo", () => {
    const foo = () => "foo";
    assert.equal(foo(), "foo");
  });
});
