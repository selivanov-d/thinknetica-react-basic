import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { indexPagePath } from 'helpers/pathes';
import CartItemPropTypes from 'proptypes/cart-item';
import CartCheckoutForm from 'components/CartCheckoutForm/CartCheckoutForm';

const CartCheckoutPage = ({ items, loaded }) => (
  <main className="page -cart-checkout">
    <h1 className="page_title">Оформление заказа</h1>

    <div className="page_body">
      <Row>
        <Col xs="6">
          {loaded && items.length > 0 && <CartCheckoutForm items={items} />}
        </Col>
      </Row>
    </div>

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

CartCheckoutPage.defaultProps = {
  items: [],
};

CartCheckoutPage.propTypes = {
  items: PropTypes.arrayOf(CartItemPropTypes),
  loaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.items,
  loaded: state.cart.loaded,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartCheckoutPage);
