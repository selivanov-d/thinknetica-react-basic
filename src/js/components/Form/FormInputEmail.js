import React from 'react';
import { Field } from 'redux-form';
import { FormGroup, Label } from 'reactstrap';

import renderField from 'helpers/render-field';
import { required, email } from 'helpers/form-validators';
import PropTypes from 'prop-types';

const FormInputEmail = ({ name, children }) => (
  <FormGroup>
    <Label for={name}>{children}</Label>
    <Field name={name} component={renderField} type="email" validate={[required, email]} />
  </FormGroup>
);

FormInputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormInputEmail;
