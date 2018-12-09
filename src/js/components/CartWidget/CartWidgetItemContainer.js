import React from 'react';
import PropTypes from 'prop-types';

import CartWidgetItem from 'components/CartWidget/CartWidgetItem';
import CurrencyFormatter from 'components/utilities/CurrencyFormatter';

const CartWidgetItemContainer = ({ product: { title, price }, quantity }) => (
  <CartWidgetItem>
    <>
      {`${title} x ${quantity} = `}
      <CurrencyFormatter number={price * quantity} />
    </>
  </CartWidgetItem>
);

CartWidgetItemContainer.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartWidgetItemContainer;
