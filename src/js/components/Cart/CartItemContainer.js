import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

import currencyFormatter from '../../helpers/currencyFormatter';

const CartItemContainer = ({ item: { title, quantity, price } }) => {
  const formattedTotalItemPrice = currencyFormatter(price * quantity);

  return (
    <CartItem>
      {`${title} x ${quantity} = ${formattedTotalItemPrice}`}
    </CartItem>
  );
};

CartItemContainer.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItemContainer;
