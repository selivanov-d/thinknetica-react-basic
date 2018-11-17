import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ children }) => (
  <div className="cart_item">
    {children}
  </div>
);

CartItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CartItem;
