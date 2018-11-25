import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

import CartContext from 'contexts/CartContext';

class AddToCartButton extends Component {
  static contextType = CartContext;

  state = {
    quantity: 1,
  };

  handleQuantityChange = (e) => {
    this.setState({ quantity: +e.target.value });
  };

  render() {
    const { cartItemToAdd } = this.props;
    const { quantity } = this.state;
    const { changeItemQuantityInCart } = this.context;

    return (
      <InputGroup className="add-to-cart-control">
        <InputGroupAddon addonType="prepend" className="add-to-cart-control_addon">
          <Button
            block
            color="primary"
            onClick={() => changeItemQuantityInCart(cartItemToAdd.id, quantity)}
          >
            Купить
          </Button>
        </InputGroupAddon>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={this.handleQuantityChange}
          className="add-to-cart-control_button"
        />
      </InputGroup>
    );
  }
}

AddToCartButton.propTypes = {
  cartItemToAdd: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddToCartButton;
