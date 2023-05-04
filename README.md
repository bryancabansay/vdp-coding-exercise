# vdp-coding-exercise

Thank you for taking the time to complete this coding exercise. We will use this to evaluate your skills and experience.

## Exercise Description

You need to create a TypeScript library that extracts the model years from a VIN (Vehicle Identification Number). The library should be designed to be easily reusable by other developers in their own TypeScript projects. Additionally, you should provide a CLI tool called checkVin that can be used to run the library from the command line.

A VIN is a unique 17-character code that is used to identify individual motor vehicles. The code is made up of a combination of letters and numbers and is typically found on a plate on the dashboard or inside the driver's side door.

To extract the model year from a VIN, you will need to look at the 10th character of the VIN, unless the manufacturer is BMW (WMI code "WBA") or Ford Australia (WMI code "6FP" or "WF0"). For BMW and Ford Australia vehicles, the model year is encoded in the 11th character of the VIN. The WMI Code is the first 3 characters of the VIN.

However, the character can represent different years depending on the manufacturing country and the manufacturer. For example, a "D" in the 10th position might represent 1983 for a Ford vehicle, but it might represent 2013 for a Kia vehicle.

To calculate the year represented by the 10th or 11th character, you will need to use a lookup table that maps each possible character to the corresponding year (See reference table at the bottom of this page). You can then use this lookup table to extract the model year from the VIN.

## Requirements

1. The library should be written in TypeScript.
2. The library should export a function that takes a VIN as an argument and returns an array of model years as numbers.
3. The CLI tool should be written in TypeScript and use the library function to extract the model years from a given VIN.
4. The CLI tool should accept a VIN as a command line argument and output the model years to the console.
5. The CLI tool should be able to be run using npm run checkVin.

## Sample VINs for Testing

#### Character 10 contains Model Year

-   Audi A7 - `WAUZZZ4G8FN041008`
-   Holden Captiva 7 - `KL3CD265JCB102008`
-   Hyundai Tiburon - `KMHHN61FR5U178937`
-   Kia Sportage - `KNAPN813SJ7472153`
-   Volvo V50 - `YV1MW385992465966`

#### Character 11 contains Model Year

-   BMW 6 Series Gran Coupe - `WBA6E22040G926586`
-   Ford Falcon - `6FPAAAJGSWBU52222`
-   Ford Mondeo - `WF0GXXGBBGDE08873`
-   Ford Transit - `WF0XXXTTGXGA46578`

## Example Input/Output

For example, if the VIN is `U5YPB811MDL411708`, the library should return `[2013, 1983]`. The checkVin CLI tool should be able to be run like this:

```bash
$ npm run checkVin U5YPB811MDL411708
[2013, 1983]
```

## Submission Instructions

1. Clone this GitHub repository
2. Implement the library and CLI tool according to the exercise requirements.
3. Test your implementation with different VINs to make sure it works correctly.
4. Create a pull request to submit your completed code.

## Bonus

If you want to challenge yourself further, you can try to add error handling to the library function to handle invalid VINs. You can also create unit tests for the library function and the checkVin CLI tool.

# Reference

| VIN Character | Model Year |
| ------------- | ---------- |
| 1             | 1980       |
| 2             | 1981       |
| 3             | 1982       |
| 4             | 1983       |
| 5             | 1984       |
| 6             | 1985       |
| 7             | 1986       |
| 8             | 1987       |
| 9             | 1988       |
| A             | 1980       |
| B             | 1981       |
| C             | 1982       |
| D             | 1983       |
| E             | 1984       |
| F             | 1985       |
| G             | 1986       |
| H             | 1987       |
| J             | 1988       |
| K             | 1989       |
| L             | 1990       |
| M             | 1991       |
| N             | 1992       |
| P             | 1993       |
| R             | 1994       |
| S             | 1995       |
| T             | 1996       |
| V             | 1997       |
| W             | 1998       |
| X             | 1999       |
| Y             | 2000       |
| 1             | 2001       |
| 2             | 2002       |
| 3             | 2003       |
| 4             | 2004       |
| 5             | 2005       |
| 6             | 2006       |
| 7             | 2007       |
| 8             | 2008       |
| 9             | 2009       |
| A             | 2010       |
| B             | 2011       |
| C             | 2012       |
| D             | 2013       |
| E             | 2014       |
| F             | 2015       |
| G             | 2016       |
| H             | 2017       |
| J             | 2018       |
| K             | 2019       |
| L             | 2020       |
| M             | 2021       |
| N             | 2022       |
| P             | 2023       |
| R             | 2024       |
| S             | 2025       |
| T             | 2026       |
| V             | 2027       |
| W             | 2028       |
| X             | 2029       |
| Y             | 2030       |
