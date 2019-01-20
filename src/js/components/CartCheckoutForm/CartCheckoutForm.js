import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm as withReduxForm, SubmissionError } from 'redux-form';
import {
  Form,
  Button,
  Row,
  Col,
} from 'reactstrap';

import { clearCart } from 'actions/cart';
import submitOrder from 'actions/order';
import { FORM_NOT_FILLED } from 'constants/validation-messages';
import FormInputText from 'components/Form/FormInputText';
import FormInputEmail from 'components/Form/FormInputEmail';
import FormInputTextarea from 'components/Form/FormInputTextarea';

const onSubmit = (inputValues, dispatch, props) => {
  const { items } = props;

  if (!Object.entries(inputValues).length) {
    throw new SubmissionError({
      _error: FORM_NOT_FILLED,
    });
  } else {
    return Object.assign({}, inputValues, { items });
  }
};

const onSubmitSuccess = (dataToSubmit, dispatch, props) => {
  const { reset } = props;

  dispatch(submitOrder(dataToSubmit)).then(() => {
    dispatch(clearCart());
    reset('checkout');
  });
};

const CartCheckoutForm = ({ handleSubmit, error }) => (
  <Form onSubmit={handleSubmit}>
    <FormInputText name="firstName">Имя</FormInputText>
    <FormInputText name="lastName">Фамилия</FormInputText>
    <FormInputEmail name="email">Email</FormInputEmail>
    <FormInputTextarea name="message">Комментарий к заказу</FormInputTextarea>

    <Row>
      <Col xs={6}>
        <Button color="primary" block>Отправить заказ</Button>
      </Col>
      <Col xs={6}>
        {error && <div className="text-danger">{error}</div>}
      </Col>
    </Row>
  </Form>
);

CartCheckoutForm.defaultProps = {
  error: null,
};

CartCheckoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default withReduxForm({
  form: 'checkout',
  onSubmit,
  onSubmitSuccess,
})(CartCheckoutForm);
