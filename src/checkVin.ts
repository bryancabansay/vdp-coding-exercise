import { modelYearMap } from "./data";
import { normalize, isVinValid, getModelYearIndex } from "./utils";

/**
 * Get the model year depending on the VIN.
 * @param {string} vin VIN number to be checked.
 * @returns {number[]} Represents the year model applicable for the VIN.
 * Will return an empty array if the VIN is invalid.
 */
const checkVin = (vin: string): number[] => {
  const normalizedVin = normalize(vin);

  // Check if VIN is valid or not.
  if (!isVinValid(normalizedVin)) {
    console.error("Invalid VIN format. Returning blank.");
    return [];
  }

  // Return the year/s array, depending on the model
  return modelYearMap[normalizedVin.charAt(getModelYearIndex(vin))];
};

export default checkVin;
