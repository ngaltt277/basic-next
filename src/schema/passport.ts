import * as yup from 'yup';

import { PASSPORT_VALIDATION_MESSAGES } from '@/constant/validate-message';

export const schema = yup
  .object({
    salutation: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.salutationRequired),
    familyName: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.familyNameRequired)
      .max(50, PASSPORT_VALIDATION_MESSAGES.familyNameMax),
    givenName: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.givenNameRequired)
      .max(100, PASSPORT_VALIDATION_MESSAGES.givenNameMax),
    nameOfCorrespondence: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.nameOfCorrespondenceRequired)
      .max(100, PASSPORT_VALIDATION_MESSAGES.nameOfCorrespondenceMax),
    dateOfBirth: yup
      .date()
      .required(PASSPORT_VALIDATION_MESSAGES.dateOfBirthRequired)
      .typeError(PASSPORT_VALIDATION_MESSAGES.dateOfBirthTypeError),
    gender: yup.string().required(PASSPORT_VALIDATION_MESSAGES.genderRequired),
    nationality: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.nationalityRequired),
    countryOfResidence: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.countryOfResidenceRequired),
    firstAlternateLastName: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.alternateLastNameRequired),
    firstAlternateFirstName: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.alternateFirstNameRequired),
    secondAlternateLastName: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.alternateLastNameRequired),
    secondAlternateFirstName: yup
      .string()
      .required(PASSPORT_VALIDATION_MESSAGES.alternateFirstNameRequired),
  })
  .required();
