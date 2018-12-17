import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

import updateProductInCart from 'actions/cart';
import ProductPropTypes from 'proptypes/product';

class AddToCartButton extends Component {
  state = {
    quantity: 1,
  };

  handleQuantityChange = (e) => {
    this.setState({ quantity: +e.target.value });
  };

  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    const { addToCart } = this.props;

    return (
      <InputGroup className="add-to-cart-control">
        <InputGroupAddon addonType="prepend" className="add-to-cart-control_addon">
          <Button
            block
            color="primary"
            onClick={() => addToCart(product, quantity)}
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
  addToCart: PropTypes.func.isRequired,
  product: ProductPropTypes.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  addToCart(product, quantity) {
    dispatch(updateProductInCart(product, quantity));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddToCartButton);
