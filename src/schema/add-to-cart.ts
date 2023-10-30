import * as yup from 'yup';
import { CART_VALIDATION_MESSAGES } from '@/constant/validate-message';

export const schema = yup
  .object({
    carts: yup.array().of(
      yup.object({
        product: yup
          .string()
          .required(CART_VALIDATION_MESSAGES.productRequired),
        quantity: yup
          .number()
          .typeError(CART_VALIDATION_MESSAGES.quantityTypeError)
          .positive(CART_VALIDATION_MESSAGES.quantityPositive)
          .required(CART_VALIDATION_MESSAGES.quantityRequired),
      }),
    ),
  })
  .required();
