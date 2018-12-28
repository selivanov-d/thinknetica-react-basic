import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartItemPropTypes from 'proptypes/cart-item';
import CartWidget from 'components/CartWidget/CartWidget';
import { updateProductInCart, loadCart } from 'actions/cart';

class CartWidgetContainer extends Component {
  componentDidMount() {
    const { loadCartContent } = this.props;
    loadCartContent();
  }

  render() {
    const { items, changeItemQuantityInCart } = this.props;
    return (
      <aside className="cart-widget">
        <CartWidget
          items={items}
          changeItemQuantityInCart={changeItemQuantityInCart}
        />
      </aside>
    );
  }
}

CartWidgetContainer.defaultProps = {
  items: [],
};

CartWidgetContainer.propTypes = {
  items: PropTypes.arrayOf(CartItemPropTypes),
  changeItemQuantityInCart: PropTypes.func.isRequired,
  loadCartContent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
  changeItemQuantityInCart(product, quantity) {
    dispatch(updateProductInCart(product, quantity));
  },
  loadCartContent() {
    dispatch(loadCart());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartWidgetContainer);
