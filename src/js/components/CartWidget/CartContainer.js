import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartContext from 'contexts/CartContext';

class CartContainer extends Component {
  state = {
    cart: [],
  };

  get cartIsEmpty() {
    const { cart } = this.state;
    return cart.length <= 0;
  }

  changeItemQuantityInCart = (product, quantity) => {
    this.setState((state) => {
      const { cart } = state;

      if (this.cartIsEmpty) {
        this.addItemToCart(product, quantity);
      } else {
        const itemInCart = cart.some(cartItem => cartItem.product.id === product.id);

        if (itemInCart) {
          this.updateItemQuantityInCart(product, quantity);
        } else {
          this.addItemToCart(product, quantity);
        }
      }

      return ({
        cart,
      });
    });
  };

  addItemToCart(product, quantity) {
    const { cart } = this.state;

    cart.push({ product, quantity });
  }

  removeItemFromCart(product) {
    this.setState((state) => {
      const { cart } = state;
      const newCart = cart.filter(cartItem => cartItem.product.id !== product.id);

      return {
        cart: newCart,
      };
    });
  }

  updateItemQuantityInCart(product, quantity) {
    const { cart } = this.state;

    const updatedItemIndex = cart.findIndex(cartItem => cartItem.product.id === product.id);
    const updatedItem = cart[updatedItemIndex];
    const newQuantity = updatedItem.quantity + quantity;

    if (newQuantity <= 0) {
      this.removeItemFromCart(product);
    } else {
      updatedItem.quantity = newQuantity;
    }
  }

  render() {
    const { children } = this.props;
    const { cart } = this.state;
    const cartState = {
      itemsInCart: cart,
      changeItemQuantityInCart: this.changeItemQuantityInCart,
    };

    return (
      <CartContext.Provider value={cartState}>
        {children}
      </CartContext.Provider>
    );
  }
}

CartContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CartContainer;
