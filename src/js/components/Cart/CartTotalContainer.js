import React from 'react';
import PropTypes from 'prop-types';

import CartTotal from 'components/Cart/CartTotal';
import CurrencyFormatter from 'components/utilities/CurrencyFormatter';

const CartTotalContainer = ({ items }) => {
  const totalPrice = items.reduce((total, item) => (total + item.price * item.quantity), 0);

  return (
    <CartTotal>
      <CurrencyFormatter number={totalPrice} />
    </CartTotal>
  );
};

CartTotalContainer.defaultProps = {
  items: [],
};

CartTotalContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
};

export default CartTotalContainer;
