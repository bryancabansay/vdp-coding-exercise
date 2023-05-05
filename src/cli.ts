import checkVin from "./checkVin";

console.clear();
const vin = process.argv.slice(2);
const result = checkVin(vin[0]);
console.log(result);
