import * as yup from 'yup';
import { LOGIN_VALIDATION_MESSAGES } from '@/constant/validate-message';

export const schema = yup
  .object({
    username: yup
      .string()
      .required(LOGIN_VALIDATION_MESSAGES.usernameRequired)
      .max(20, LOGIN_VALIDATION_MESSAGES.usernameMax),
    password: yup
      .string()
      .required(LOGIN_VALIDATION_MESSAGES.passwordRequired)
      .min(8, LOGIN_VALIDATION_MESSAGES.passwordMin)
      .max(16, LOGIN_VALIDATION_MESSAGES.passwordMax),
    confirmPassword: yup
      .string()
      .required(LOGIN_VALIDATION_MESSAGES.confirmPasswordRequired)
      .oneOf(
        [yup.ref('password')],
        LOGIN_VALIDATION_MESSAGES.confirmPasswordMatch,
      ),
  })
  .required();
