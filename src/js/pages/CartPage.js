import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { indexPagePath } from 'helpers/pathes';
import Cart from 'components/Cart/Cart';
import CartItemPropTypes from 'proptypes/cart-item';
import { loadCart, updateProductInCart } from 'actions/cart';

class CartPage extends Component {
  componentDidMount() {
    const { loadCartContent } = this.props;
    loadCartContent();
  }

  render() {
    const { items, loaded } = this.props;
    return (
      <main className="page -cart">
        <h1 className="page_title">Корзина</h1>

        {loaded && items.length > 0 && <Cart items={items} />}

        {
          loaded && items.length === 0 && (
            <Redirect to={{
              pathname: indexPagePath(),
              state: { redirectReason: 'Корзина пуста' },
            }}
            />
          )
        }
      </main>
    );
  }
}

CartPage.defaultProps = {
  items: [],
};

CartPage.propTypes = {
  items: PropTypes.arrayOf(CartItemPropTypes),
  loadCartContent: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.items,
  loadCartContent: PropTypes.func.isRequired,
  loaded: state.cart.loaded,
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
)(CartPage);
