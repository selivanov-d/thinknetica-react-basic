import { string } from 'yup';
import { FORM_INPUT_EMPTY, FORM_INPUT_NOT_EMAIL } from 'constants/validation-messages';

export const required = (value) => {
  const schema = string().trim().required();
  return schema.isValidSync(value) ? undefined : FORM_INPUT_EMPTY;
};

export const email = (value) => {
  const schema = string().trim().email();
  return schema.isValidSync(value) ? undefined : FORM_INPUT_NOT_EMAIL;
};
