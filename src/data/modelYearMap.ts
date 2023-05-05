import { minYear, maxYear, validYearChars } from "./constants";

/**
 * Creates the character to model year map.
 * Map will represent each character with the correct model year/s.
 * To update the the table, just adjust the minYear and maxYear
 * values in the constant.ts file.
 */
interface CharYearModelMap {
  [key: string]: number[];
}
const charYearMap: CharYearModelMap = {};

// Initialize the year when the format was officially used
let year = minYear;

// Iterate while the year is less than the max
while (year <= maxYear) {
  // Iterate each valid character and put the year
  for (let char of validYearChars.split("")) {
    // If the character is not yet in the map, initialize
    // a new number array. If present, just push the
    // year to the existing collection.
    if (char in charYearMap) {
      const arr = charYearMap[char];
      arr!.push(year++);
    } else {
      charYearMap[char] = [year++];
    }
    if (year > maxYear) break;
  }
}

// Freeze to avoid mutation.
Object.freeze(charYearMap);

export default charYearMap;
