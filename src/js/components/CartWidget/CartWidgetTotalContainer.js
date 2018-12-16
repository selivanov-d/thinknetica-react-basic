import React from 'react';
import PropTypes from 'prop-types';

import CartItemPropTypes from 'proptypes/cart-item';
import CartWidgetTotal from 'components/CartWidget/CartWidgetTotal';

const CartWidgetTotalContainer = ({ items }) => {
  const totalPrice = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <CartWidgetTotal totalRaw={totalPrice} />
  );
};

CartWidgetTotalContainer.propTypes = {
  items: PropTypes.arrayOf(CartItemPropTypes).isRequired,
};

export default CartWidgetTotalContainer;
