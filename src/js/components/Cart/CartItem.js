import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { catalogItemPagePath } from 'helpers/pathes';
import CartItemControl from 'components/Cart/CartItemControl';
import CartItemTotalContainer from 'components/Cart/CartItemTotalContainer';

function CartItem({ item }) {
  const { product } = item;
  const { title } = product;

  return (
    <div className="cart_item cart-item">
      <div className="cart-item_value">
        <Link to={`${catalogItemPagePath(product.id)}`}>{title}</Link>
      </div>
      <CartItemControl item={item} className="cart-item_control" />
      <CartItemTotalContainer item={item} />
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CartItem;
