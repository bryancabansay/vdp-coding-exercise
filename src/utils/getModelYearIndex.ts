import normalize from "./normalize";

/**
 * Special codes:
 *  1. BMW (WMI code "WBA")
 *  2. Ford Australia (WMI code "6FP" or "WF0")
 */
const specialWmiCodes = ["WBA", "6FP", "WF0"];

/**
 * Get the character year model index based on the WMI.
 * Will nto check validity of VIN.
 * The default result is 9.
 * @param {string} vin - The VIN to be checked.
 * @returns {number}
 */
export default (vin: string): number => {
  // Normalize the vin first
  const normalizedVin = normalize(vin);

  // Iterate each special WMI code and check if the
  // VIN starts with it. If yes, return 10 (11th character).
  // Otherwise, return 9 (10th character).
  for (let wmi of specialWmiCodes) {
    if (normalizedVin.startsWith(wmi)) {
      return 10;
    }
  }
  return 9;
};
