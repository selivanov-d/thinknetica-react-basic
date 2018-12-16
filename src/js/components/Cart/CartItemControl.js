import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import cn from 'classnames';

import updateProductInCart from 'actions/cart';

function CartItemControl(props) {
  const { item: { product, quantity: itemQuantity }, className } = props;

  const { changeItemQuantityInCart } = props;

  return (
    <InputGroup className={cn('cart-item_control', className)}>
      <InputGroupAddon addonType="prepend" className="cart-item_control-addon -prepend">
        <Button
          block
          color="primary"
          onClick={() => changeItemQuantityInCart(product, -1)}
          className="cart-item_control-button"
        >
          -
        </Button>
      </InputGroupAddon>
      <Input
        type="number"
        min="1"
        readOnly
        value={itemQuantity}
        className="cart-item_control-input"
      />
      <InputGroupAddon addonType="append" className="cart-item_control-addon -append">
        <Button
          block
          color="primary"
          onClick={() => changeItemQuantityInCart(product, 1)}
          className="cart-item_control-button"
        >
          +
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}

CartItemControl.defaultProps = {
  className: '',
};

CartItemControl.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape().isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
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
)(CartItemControl);
