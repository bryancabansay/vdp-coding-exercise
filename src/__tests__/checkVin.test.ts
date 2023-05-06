import checkVin from "../checkVin";

describe("checkVin", () => {
  const validNonSpecialVin = " WAUZZZ4G8FN041008 ";
  const validSpecialVin = " 6fpaaAJGSWBU52222";

  it("should return the correct model year", () => {
    // setup
    // exercise
    // verify
    expect(checkVin(validNonSpecialVin)).toEqual(
      expect.arrayContaining([1985, 2015])
    );
    expect(checkVin(validSpecialVin)).toEqual(
      expect.arrayContaining([1981, 2011])
    );
  });

  it("should return empty if the VIN is invalid", () => {
    // setup
    const invalidVins = [
      "",
      validNonSpecialVin.slice(0, 1), // 16 characters only
      validSpecialVin + "7", // 18 characters
      "WAUZZZ4G80N041008", // invalid (0) 10th character
      "WBA6E22040Z926586", // invalid (Z) 11th character for special
    ];

    // exercise
    // verify
    invalidVins.forEach((vin) => expect(checkVin(vin)).toEqual([]));
  });
});
