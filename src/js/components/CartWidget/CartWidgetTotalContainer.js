import React from 'react';
import PropTypes from 'prop-types';

import CartWidgetTotal from 'components/CartWidget/CartWidgetTotal';

const CartWidgetTotalContainer = ({ items }) => {
  const totalPrice = items.reduce((total, item) => (total + item.price * item.quantity), 0);

  return (
    <CartWidgetTotal totalRaw={totalPrice} />
  );
};

CartWidgetTotalContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default CartWidgetTotalContainer;
