import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FormGroup, Label } from 'reactstrap';

import { required } from 'helpers/form-validators';
import renderField from 'helpers/render-field';

const FormInputText = ({ name, children }) => (
  <FormGroup>
    <Label for={name}>{children}</Label>
    <Field name={name} component={renderField} type="text" validate={[required]} />
  </FormGroup>
);

FormInputText.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormInputText;
