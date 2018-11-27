import React from 'react';
import PropTypes from 'prop-types';

import CartWidgetItem from 'components/CartWidget/CartWidgetItem';
import CurrencyFormatter from 'components/utilities/CurrencyFormatter';

const CartWidgetItemContainer = ({ item: { title, quantity, price } }) => (
  <CartWidgetItem>
    <>
      {`${title} x ${quantity} = `}
      <CurrencyFormatter number={price * quantity} />
    </>
  </CartWidgetItem>
);

CartWidgetItemContainer.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartWidgetItemContainer;
