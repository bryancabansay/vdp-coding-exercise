import getModelYearIndex from "./getModelYearIndex";
import normalize from "./normalize";
import { modelYearMap } from "../data";

/**
 * Checks if the VIN is valid or not.
 * @param {string} - The VIN number to be checked
 * @returns {boolean} True if valid. Otherwise, false.
 */
export default (vin: string): boolean => {
  // Normalize data to avoid errors.
  const normalizedVin = normalize(vin);

  // VIN must only contain letters and digits, and should only have 17 characters.
  if (!/^[A-Z0-9]{17}$/.test(normalizedVin)) {
    return false;
  }

  // Get model year character from VIN.
  const modelYearChar = normalizedVin.charAt(getModelYearIndex(normalizedVin));

  // If the character is not present in the map, then the VIN is invalid.
  if (!(modelYearChar in modelYearMap)) {
    return false;
  }

  return true;
};
