const {
  isValidAmExCard,
  isValidDinersClubCard,
  isValidMasterCard,
  isValidVisaCard,
} = require("./util");

test("American Express card pattern", () => {
  expect(isValidAmExCard("12345")).toBe(false);
  expect(isValidAmExCard("_____378282246310005")).toBe(true);
});

test("Diner's Club card pattern", () => {
  expect(isValidDinersClubCard("12345")).toBe(false);
  expect(isValidDinersClubCard("30569309025904")).toBe(true);
});

test("Mastercard pattern", () => {
  expect(isValidMasterCard("12345")).toBe(false);
  expect(isValidMasterCard("5105105105105100")).toBe(true);
});

test("Visa card pattern", () => {
  expect(isValidVisaCard("12345")).toBe(false);
  expect(isValidVisaCard("4222222222222")).toBe(true);
});
