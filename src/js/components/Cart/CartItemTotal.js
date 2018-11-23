import React from 'react';
import PropTypes from 'prop-types';

const CartItemTotal = ({ children }) => (
  <div className="cart_item-total">
    {children}
  </div>
);

CartItemTotal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CartItemTotal;
