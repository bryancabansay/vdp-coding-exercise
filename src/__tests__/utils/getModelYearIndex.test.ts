import { getModelYearIndex } from "../../utils";

describe("getModelYearIndex", () => {
  it("should return the correct year model characters", () => {
    // setup
    const nonSpecialVin = "WAUZZZ4G8FN041008";
    const specialVin = "WBA6E22040G926586";
    const invalidVin = "";

    // exercise
    // verify
    expect(getModelYearIndex(nonSpecialVin)).toBe(9);
    expect(getModelYearIndex(specialVin)).toBe(10);
    expect(getModelYearIndex(invalidVin)).toBe(9);
  });
});
