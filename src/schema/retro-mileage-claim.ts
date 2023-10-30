import * as yup from 'yup';
import { RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES } from '@/constant/validate-message';

const REGEX_VALIDATE_NUMBER = /^[0-9]+$/;

export const schema = yup
  .object({
    partners: yup
      .string()
      .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.partnersRequired),
    billingAirline: yup
      .string()
      .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.billingAirlineRequired),
    billingFlightNumber: yup
      .string()
      .required(
        RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.billingFlightNumberRequired,
      ),
    billingClass: yup
      .string()
      .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.billingClassRequired),
    ticketingAirline: yup
      .string()
      .required(
        RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.ticketingAirlineRequired,
      ),
    ticketingFlightNumber: yup
      .string()
      .required(
        RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.ticketingFlightNumberRequired,
      ),
    ticketingClass: yup
      .string()
      .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.ticketingClassRequired),
    flightDate: yup
      .date()
      .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.flightDateRequired)

      .typeError(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.flightDateMatches),
    ticketNumber: yup
      .string()
      .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.ticketNumberRequired)
      .matches(
        REGEX_VALIDATE_NUMBER,
        RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.ticketNumberMatches,
      ),
    origin: yup
      .string()
      .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.originRequired),
    destination: yup
      .string()
      .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.destinationRequired),
    claims: yup.array(),
    kfMiles: yup.string().when('claims', {
      is: (claims: []) => claims.some((x) => x == 'kfMiles'),
      then: () =>
        yup
          .string()
          .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.kfMilesRequired)
          .matches(
            REGEX_VALIDATE_NUMBER,
            RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.kfMilesMatches,
          ),
    }),
    eliteMiles: yup.string().when('claims', {
      is: (claims: []) => claims.some((x) => x == 'eliteMiles'),
      then: () =>
        yup
          .string()
          .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.kfMilesRequired)
          .matches(
            REGEX_VALIDATE_NUMBER,
            RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.kfMilesMatches,
          ),
    }),
    ppsValue: yup.string().when('claims', {
      is: (claims: []) => claims.some((x) => x == 'ppsValue'),
      then: () =>
        yup
          .string()
          .required(RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.kfMilesRequired)
          .matches(
            REGEX_VALIDATE_NUMBER,
            RETRO_MILEAGE_CLAIM_VALIDATION_MESSAGES.kfMilesMatches,
          ),
    }),
    remarks: yup.string(),
  })
  .required();
