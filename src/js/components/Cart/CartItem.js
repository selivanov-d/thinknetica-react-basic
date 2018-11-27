import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { catalogItemPagePath } from 'helpers/pathes';
import CartItemControl from 'components/Cart/CartItemControl';
import CartItemTotalContainer from 'components/Cart/CartItemTotalContainer';

function CartItem(props) {
  const { item } = props;
  const { title } = item;

  return (
    <div className="cart_item cart-item">
      <div className="cart-item_value">
        <Link to={`${catalogItemPagePath(item.id)}`}>{title}</Link>
      </div>
      <CartItemControl item={item} className="cart-item_control" />
      <CartItemTotalContainer item={item} />
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
