import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Row,
  Col,
} from 'reactstrap';

import { cartCheckoutPagePath } from 'helpers/pathes';
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
    <div className="cart_footer">
      <Row>
        <Col xs="auto">
          <Button color="primary" block tag={Link} to={cartCheckoutPagePath()}>Оформить заказ</Button>
        </Col>
        <Col xs="auto" className="ml-auto">
          <CartTotalContainer items={items} />
        </Col>
      </Row>
    </div>
  </div>
);

Cart.propTypes = {
  items: PropTypes.arrayOf(CartItemPropTypes).isRequired,
};

export default Cart;
