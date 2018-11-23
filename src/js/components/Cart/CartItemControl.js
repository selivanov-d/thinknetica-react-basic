import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
} from 'reactstrap';
import cn from 'classnames';

import CartContext from 'contexts/CartContext';

class CartItemControl extends Component {
  static contextType = CartContext;

  render() {
    const { item: { id: itemId, quantity: itemQuantity }, className } = this.props;
    const { changeItemQuantityInCart } = this.context;

    return (
      <InputGroup className={cn('cart-item_control', className)}>
        <InputGroupAddon addonType="prepend" className="cart-item_control-addon -prepend">
          <Button
            block
            color="primary"
            onClick={() => changeItemQuantityInCart(itemId, -1)}
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
            onClick={() => changeItemQuantityInCart(itemId, 1)}
            className="cart-item_control-button"
          >
            +
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

CartItemControl.defaultProps = {
  className: '',
};

CartItemControl.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default CartItemControl;
