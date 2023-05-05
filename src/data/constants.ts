// The only valid characters for the model year map
export const validYearChars = "ABCDEFGHJKLMNPRSTVWXY123456789";

/**
 * As per https://www.alldata.com/us/en/support/repair-collision/article/vin-to-year-chart,
 * Start year is 1990 and the max year is 2029.
 */
export const minYear = 1980;
export const maxYear = 2029;