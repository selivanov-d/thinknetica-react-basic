import React from 'react';
import PropTypes from 'prop-types';

import CartItemTotal from 'components/Cart/CartItemTotal';
import CurrencyFormatter from 'components/utilities/CurrencyFormatter';

const CartItemTotalContainer = ({ item }) => {
  const totalItemPrice = item.product.price * item.quantity;

  return (
    <CartItemTotal>
      <CurrencyFormatter number={totalItemPrice} />
    </CartItemTotal>
  );
};

CartItemTotalContainer.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      price: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItemTotalContainer;
