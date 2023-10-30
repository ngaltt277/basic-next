export const LOGIN_VALIDATION_MESSAGES: Record<string, string> = {
  usernameRequired: 'Username is required',
  usernameMax: 'Username is at most 20 characters',
  passwordRequired: 'Password is required',
  passwordMax: 'Password is at most 16 characters',
  passwordMin: 'Password is at least 8 characters',
  confirmPasswordRequired: 'Confirm password is required',
  confirmPasswordMatch: 'Confirm password does not match',
};

export const PASSPORT_VALIDATION_MESSAGES: Record<string, string> = {
  salutationRequired: 'Salutation is required',
  familyNameRequired: 'Family Name is required',
  familyNameMax: 'Family Name is at most 50 characters',
  givenNameRequired: 'Given Name is required',
  givenNameMax: 'Given Name is at most 100 characters',
  nameOfCorrespondenceRequired: 'Name of Correspondence is required',
  nameOfCorrespondenceMax: 'Name of Correspondence is at most 100 characters',
  dateOfBirthRequired: 'Date of Birth is required',
  dateOfBirthTypeError: 'Enter a valid date of birth',
  genderRequired: 'Gender is required',
  nationalityRequired: 'Nationality is required',
  countryOfResidenceRequired: 'Country of Residence is required',
  alternateLastNameRequired: 'Alternate Last Name is required',
  alternateFirstNameRequired: 'Alternate First Name is required',
};

export const CART_VALIDATION_MESSAGES: Record<string, string> = {
  productRequired: 'Product is required',
  quantityRequired: 'Quantity is required',
  quantityPositive: 'Quantity is greater than 0',
  quantityTypeError: 'Quantity must be a number',
};

export const RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES: Record<string, string> = {
  partnersRequired: 'Partners field is required',
  billingAirlineRequired: 'Billing Airline is required',
  billingFlightNumberRequired: 'Billing Flight Number is required',
  billingClassRequired: 'Billing Class is required',
  ticketingAirlineRequired: 'Ticketing Airline is required',
  ticketingFlightNumberRequired: 'Ticketing flight number is required',
  ticketingClassRequired: 'Ticketing Class is required',
  flightDateRequired: 'Flight date is required',
  flightDateMatches: 'Flight date is invalid',
  ticketNumberRequired: 'Ticket number is required',
  ticketNumberMatches: 'Ticket number only contains numbers',
  originRequired: 'Origin is required',
  destinationRequired: 'Destination is required',
  kfMilesRequired: 'KF miles is required',
  kfMilesMatches: 'KF miles only contains numbers',
  eliteMilesRequired: 'Elite miles is required',
  eliteMilesMatches: 'Elite miles only contains numbers',
  ppsValueRequired: 'PPS value is required',
  ppsValueMatches: 'PPS value only contains numbers',
};
