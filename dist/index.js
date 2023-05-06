"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  checkVin: () => checkVin_default
});
module.exports = __toCommonJS(src_exports);

// src/data/constants.ts
var validYearChars = "ABCDEFGHJKLMNPRSTVWXY123456789";
var minYear = 1980;
var maxYear = 2029;

// src/data/modelYearMap.ts
var charYearMap = {};
var year = minYear;
while (year <= maxYear) {
  for (let char of validYearChars.split("")) {
    if (char in charYearMap) {
      const arr = charYearMap[char];
      arr.push(year++);
    } else {
      charYearMap[char] = [year++];
    }
    if (year > maxYear)
      break;
  }
}
Object.freeze(charYearMap);
var modelYearMap_default = charYearMap;

// src/utils/normalize.ts
var normalize_default = (vin) => {
  return vin?.trim().toUpperCase();
};

// src/utils/getModelYearIndex.ts
var specialWmiCodes = ["WBA", "6FP", "WF0"];
var getModelYearIndex_default = (vin) => {
  const normalizedVin = normalize_default(vin);
  for (let wmi of specialWmiCodes) {
    if (normalizedVin.startsWith(wmi)) {
      return 10;
    }
  }
  return 9;
};

// src/utils/isVinValid.ts
var isVinValid_default = (vin) => {
  const normalizedVin = normalize_default(vin);
  if (!/^[A-Z0-9]{17}$/.test(normalizedVin)) {
    return false;
  }
  const modelYearChar = normalizedVin.charAt(getModelYearIndex_default(normalizedVin));
  if (!(modelYearChar in modelYearMap_default)) {
    return false;
  }
  return true;
};

// src/checkVin.ts
var checkVin = (vin) => {
  const normalizedVin = normalize_default(vin);
  if (!isVinValid_default(normalizedVin)) {
    console.error("Invalid VIN format. Returning blank.");
    return [];
  }
  return modelYearMap_default[normalizedVin.charAt(getModelYearIndex_default(vin))];
};
var checkVin_default = checkVin;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkVin
});
