import React from 'react';
import PropTypes from 'prop-types';

import CartTotal from './CartTotal';

const CartTotalContainer = ({ items }) => {
  const totalPrice = items.reduce((total, item) => (total + item.price * item.quantity), 0);

  return (
    <CartTotal totalRaw={totalPrice} />
  );
};

CartTotalContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default CartTotalContainer;
