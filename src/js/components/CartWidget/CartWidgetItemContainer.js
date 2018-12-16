import React from 'react';
import PropTypes from 'prop-types';

import ProductPropTypes from 'proptypes/product';
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
  product: ProductPropTypes.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartWidgetItemContainer;
