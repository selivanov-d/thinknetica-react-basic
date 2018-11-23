import React from 'react';
import PropTypes from 'prop-types';

const CartTotal = ({ children }) => (
  <div className="cart_total">
    Итого:
    {' '}
    <strong>{children}</strong>
  </div>
);

CartTotal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CartTotal;
