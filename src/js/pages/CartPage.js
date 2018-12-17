import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { indexPagePath } from 'helpers/pathes';
import Cart from 'components/Cart/Cart';
import CartItemPropTypes from 'proptypes/cart-item';

const CartPage = ({ cart: items }) => (
  <main className="page -cart">
    <h1 className="page_title">Корзина</h1>
    {
      items.length > 0
        ? <Cart items={items} />
        : (
          <Redirect to={{
            pathname: indexPagePath(),
            state: { redirectReason: 'Корзина пуста' },
          }}
          />
        )
    }
  </main>
);

CartPage.defaultProps = {
  cart: [],
};

CartPage.propTypes = {
  cart: PropTypes.arrayOf(CartItemPropTypes),
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
)(CartPage);
