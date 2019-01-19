import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartItemPropTypes from 'proptypes/cart-item';
import CartWidget from 'components/CartWidget/CartWidget';
import { updateProductInCart } from 'actions/cart';

const CartWidgetContainer = ({ items, changeItemQuantityInCart }) => (
  <aside className="cart-widget">
    <CartWidget
      items={items}
      changeItemQuantityInCart={changeItemQuantityInCart}
    />
  </aside>
);

CartWidgetContainer.defaultProps = {
  items: [],
};

CartWidgetContainer.propTypes = {
  items: PropTypes.arrayOf(CartItemPropTypes),
  changeItemQuantityInCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
  changeItemQuantityInCart(product, quantity) {
    dispatch(updateProductInCart(product, quantity));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartWidgetContainer);
