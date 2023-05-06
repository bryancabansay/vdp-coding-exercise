import { exec } from "child_process";

describe("cli", () => {
  it("should print a blank array and log error if VIN is invalid", (done) => {
    // setup
    // exercise
    // verify
    exec("npm run checkVin 111111111111111", (error, stdout, stderr) => {
      expect(stderr.includes("Invalid VIN format. Returning blank.")).toBe(
        true
      );
      expect(stdout.includes("[]")).toBe(true);
      done();
    });
  });

  it("should print a blank array and log error if VIN is blank", (done) => {
    // setup
    // exercise
    // verify
    exec("npm run checkVin       ", (error, stdout, stderr) => {
      expect(stderr.includes("Invalid VIN format. Returning blank.")).toBe(
        true
      );
      expect(stdout.includes("[]")).toBe(true);
      done();
    });
  });

  it("should print the year models if VIN is valid", (done) => {
    // setup
    // exercise
    // verify
    exec("npm run checkVin U5YPB811MDL411708  ", (error, stdout, stderr) => {
      expect(stderr.includes("Invalid VIN format. Returning blank.")).toBe(
        false
      );
      expect(stdout.includes("[ 1983, 2013 ]")).toBe(true);
      done();
    });
  });
});
