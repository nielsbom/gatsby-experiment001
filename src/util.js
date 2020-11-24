const generateCCValidator = creditcard_pattern => card =>
  card.match(creditcard_pattern) !== null;

const isValidAmExCard = generateCCValidator("^(3[47][0-9]{13})*$");
const isValidDinersClubCard = generateCCValidator(
  "^(3(?:0[0-5]|[68][0-9])[0-9]{11})*$"
);
const isValidMasterCard = generateCCValidator("^(5[1-5][0-9]{14})*$");
const isValidVisaCard = generateCCValidator("^(4[0-9]{12}(?:[0-9]{3})?)*$");

module.exports = {
  isValidAmExCard,
  isValidDinersClubCard,
  isValidMasterCard,
  isValidVisaCard,
};
