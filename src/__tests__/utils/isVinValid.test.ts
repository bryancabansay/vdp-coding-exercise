import { isVinValid } from "../../utils";

describe("isVinValid", () => {
  it("should return correct results", () => {
    // setup
    const validNonSpecialVin = "WAUZZZ4G8FN041008";
    const validSpecialVin = "WBA6E22040G926586";
    const emptyString = "";
    const sixteenChars = validNonSpecialVin.slice(0, 1);
    const eighteenChars = validSpecialVin + "7";
    const invalidTenthChar = "WAUZZZ4G80N041008";
    const invalidEleventhChar = "WBA6E22040Z926586";

    // exercise
    // verify
    expect(isVinValid(validNonSpecialVin)).toBe(true);
    expect(isVinValid(validSpecialVin)).toBe(true);
    expect(isVinValid(emptyString)).toBe(false);
    expect(isVinValid(sixteenChars)).toBe(false);
    expect(isVinValid(eighteenChars)).toBe(false);
    expect(isVinValid(invalidTenthChar)).toBe(false);
    expect(isVinValid(invalidEleventhChar)).toBe(false);
  });
});
