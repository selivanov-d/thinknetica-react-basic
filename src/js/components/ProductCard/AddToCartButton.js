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
  state = {
    quantity: 1,
  };

  handleQuantityChange = (e) => {
    this.setState({ quantity: +e.target.value });
  };

  render() {
    const { cartItemToAdd } = this.props;
    const { quantity } = this.state;

    return (
      <InputGroup className="add-to-cart-control">
        <InputGroupAddon addonType="prepend" className="add-to-cart-control_addon">
          <CartContext.Consumer>
            {({ changeItemQuantityInCart }) => (
              <Button
                block
                color="primary"
                onClick={() => changeItemQuantityInCart(cartItemToAdd.id, quantity)}
              >
                Купить
              </Button>
            )}
          </CartContext.Consumer>
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
