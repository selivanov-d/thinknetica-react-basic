import React from 'react';
import { Field } from 'redux-form';
import { FormGroup, Label } from 'reactstrap';

import { required } from 'helpers/form-validators';
import renderField from 'helpers/render-field';
import PropTypes from 'prop-types';

const FormInputTextarea = ({ name, children }) => (
  <FormGroup>
    <Label for={name}>{children}</Label>
    <Field name={name} component={renderField} type="textarea" validate={[required]} />
  </FormGroup>
);

FormInputTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormInputTextarea;
