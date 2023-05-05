/**
 * Normalize the string so that processing errors
 * can be reduced.
 * @param {string} vin - The string to be normalized.
 * @returns {string}
 */
export default (vin: string): string => {
  return vin?.trim().toUpperCase();
};
