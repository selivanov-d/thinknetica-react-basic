import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm as withReduxForm, SubmissionError } from 'redux-form';
import {
  Form,
  Button,
  Row,
  Col,
} from 'reactstrap';

import { FORM_NOT_FILLED } from 'constants/validation-messages';
import submitContacts from 'actions/contacts';
import FormInputText from 'components/Form/FormInputText';
import FormInputEmail from 'components/Form/FormInputEmail';
import FormInputTextarea from 'components/Form/FormInputTextarea';

const onSubmit = (inputValues) => {
  if (!Object.entries(inputValues).length) {
    throw new SubmissionError({
      _error: FORM_NOT_FILLED,
    });
  } else {
    return inputValues;
  }
};

const onSubmitSuccess = (dataToSubmit, dispatch, props) => {
  const { reset } = props;

  dispatch(submitContacts(dataToSubmit)).then(() => {
    reset('checkout');
  });
};

const ContactsForm = ({ handleSubmit, error }) => (
  <Form onSubmit={handleSubmit}>
    <FormInputText name="firstName">Имя</FormInputText>
    <FormInputText name="lastName">Фамилия</FormInputText>
    <FormInputEmail name="email">Email</FormInputEmail>
    <FormInputTextarea name="message">Комментарий</FormInputTextarea>

    <Row>
      <Col xs={6}>
        <Button color="primary" block>Отправить</Button>
      </Col>
      <Col xs={6}>
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
  form: 'contacts',
  onSubmit,
  onSubmitSuccess,
})(ContactsForm);
