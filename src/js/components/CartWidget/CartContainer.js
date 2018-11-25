import React, { Component } from 'react';
import PropTypes from 'prop-types';

import products from 'constants/products';
import CartContext from 'contexts/CartContext';

class CartContainer extends Component {
  state = {
    cart: [],
  };

  get cartIsEmpty() {
    const { cart } = this.state;
    return cart.length <= 0;
  }

  changeItemQuantityInCart = (itemId, quantity) => {
    this.setState((state) => {
      const { cart } = state;

      if (this.cartIsEmpty) {
        this.addItemToCart(itemId, quantity);
      } else {
        const itemInCart = cart.some(cartItem => cartItem.id === itemId);

        if (itemInCart) {
          this.updateItemQuantityInCart(itemId, quantity);
        } else {
          this.addItemToCart(itemId, quantity);
        }
      }

      return ({
        cart,
      });
    });
  };

  addItemToCart(itemId, quantity) {
    const { cart } = this.state;
    const newProduct = products.find(item => item.id === itemId);

    cart.push({ ...newProduct, quantity });
  }

  removeItemFromCart(itemId) {
    this.setState((state) => {
      const { cart } = state;
      const newCart = cart.filter(item => item.id !== itemId);

      return {
        cart: newCart,
      };
    });
  }

  updateItemQuantityInCart(itemId, quantity) {
    const { cart } = this.state;

    const updatedItemIndex = cart.findIndex(item => item.id === itemId);
    const updatedItem = cart[updatedItemIndex];
    const newQuantity = updatedItem.quantity + quantity;

    if (newQuantity <= 0) {
      this.removeItemFromCart(itemId);
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
