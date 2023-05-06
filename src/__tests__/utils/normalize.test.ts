import { normalize } from "../../utils";

describe("normalize", () => {
  it("should return a normalized string", () => {
    // setup
    const expected = "WAUZZZ4G8FN041008";
    const vin = ` ${expected.toLocaleLowerCase()} `;

    // exercise
    const actual = normalize(vin);

    // verify
    expect(actual).toBe(expected);
  });
});
