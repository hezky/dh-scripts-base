import { assert } from "chai";
import { utilsPackageJson } from "";

describe("utilsPackageJson", () => {
  it("compare package.json", () => {
    assert.equal(
      utilsPackageJson.name,
      "dh-scripts-base",
      "compare package.json name"
    );
  });
});
