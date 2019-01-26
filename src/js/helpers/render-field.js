import React from 'react';
import { Input, FormText } from 'reactstrap';

export default ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
    warning,
  },
}) => (
  <>
    <Input {...input} placeholder={label} type={type} />
    {touched && (
      (error && <FormText color="danger">{error}</FormText>)
      || (warning && <FormText color="warning">{warning}</FormText>)
    )}
  </>
);
