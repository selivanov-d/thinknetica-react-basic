import React from 'react';
import PropTypes from 'prop-types';

import CartItem from 'components/Cart/CartItem';
import CartTotalContainer from 'components/Cart/CartTotalContainer';
import CartItemPropTypes from 'proptypes/cart-item';

const Cart = ({ items }) => (
  <div className="cart">
    <div className="cart_items">
      {
        items.map(item => (
          <CartItem item={item} key={item.product.id} />
        ))
      }
    </div>
    <CartTotalContainer items={items} />
  </div>
);

Cart.propTypes = {
  items: PropTypes.arrayOf(CartItemPropTypes).isRequired,
};

export default Cart;
