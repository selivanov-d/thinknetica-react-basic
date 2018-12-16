import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartItemPropTypes from 'proptypes/cart-item';
import CartWidget from 'components/CartWidget/CartWidget';
import updateProductInCart from 'actions/cart';

const CartWidgetContainer = ({ cart, changeItemQuantityInCart }) => (
  <aside className="cart-widget">
    <CartWidget
      items={cart}
      changeItemQuantityInCart={changeItemQuantityInCart}
    />
  </aside>
);

CartWidgetContainer.defaultProps = {
  cart: [],
};

CartWidgetContainer.propTypes = {
  cart: PropTypes.arrayOf(CartItemPropTypes),
  changeItemQuantityInCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
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
