import React, { Component } from 'react';

import products from '../constants/products';

import CatalogItems from '../components/Catalog/CatalogItems';
import CartContext from '../contexts/CartContext';
import CartContainer from '../components/Cart/CartContainer';

class CatalogPage extends Component {
  state = {
    cart: [],
  };

  addItemToCart = (newItem, quantity) => {
    this.setState((state) => {
      const { cart } = state;
      const newItemIndex = cart.findIndex(cartItem => cartItem.id === newItem.id);

      if (newItemIndex === -1) {
        cart.push({ ...newItem, quantity });
      } else {
        cart[newItemIndex].quantity += quantity;
      }

      return ({
        cart,
      });
    });
  };

  render() {
    const { cart } = this.state;
    const cartState = {
      itemsInCart: cart,
      addItemToCart: this.addItemToCart,
    };

    return (
      <main className="page -catalog">
        <h1 className="page_title">Страница каталога</h1>
        <CartContext.Provider value={cartState}>
          <CatalogItems products={products} />
          <CartContainer />
        </CartContext.Provider>
      </main>
    );
  }
}

export default CatalogPage;
