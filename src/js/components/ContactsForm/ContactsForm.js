import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm as withReduxForm, SubmissionError } from 'redux-form';
import {
  Form,
  Button,
  Row,
  Col,
} from 'reactstrap';

import FormInputText from 'components/Form/FormInputText';
import FormInputEmail from 'components/Form/FormInputEmail';
import FormInputTextarea from 'components/Form/FormInputTextarea';

const submit = (inputValues) => {
  if (!Object.entries(inputValues).length) {
    throw new SubmissionError({
      _error: 'Форма должна быть заполнена',
    });
  } else {
    const parsedValues = Object.entries(inputValues).map(item => `${item[0]}: ${item[1]}`).join('\n');
    alert(parsedValues);
  }
};

const ContactsForm = ({ handleSubmit, error }) => (
  <Form onSubmit={handleSubmit(submit)}>
    <FormInputText name="firstName">Имя</FormInputText>
    <FormInputText name="lastName">Фамилия</FormInputText>
    <FormInputEmail name="email">Email</FormInputEmail>
    <FormInputTextarea name="comment">Комментарий</FormInputTextarea>

    <Row>
      <Col xs={3}>
        <Button color="primary" block>Submit</Button>
      </Col>
      <Col xs={9}>
        {error && <div className="text-danger">{error}</div>}
      </Col>
    </Row>
  </Form>
);

ContactsForm.defaultProps = {
  error: null,
};

ContactsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default withReduxForm({
  form: 'contact',
})(ContactsForm);
