/**
 * Get the model year depending on the VIN.
 * @param {string} vin VIN number to be checked.
 * @returns {number[]} Represents the year model applicable for the VIN.
 * Will return an empty array if the VIN is invalid.
 */
declare const checkVin: (vin: string) => number[];

export { checkVin };
