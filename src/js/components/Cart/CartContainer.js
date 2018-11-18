import React from 'react';

import Cart from './Cart';
import CartContext from '../../contexts/CartContext';

const CartContainer = () => (
  <CartContext.Consumer>
    {
      ({ itemsInCart, addItemToCart }) => (
        <aside className="cart-container">
          <Cart items={itemsInCart} addItemToCart={addItemToCart} />
        </aside>
      )
    }
  </CartContext.Consumer>
);

export default CartContainer;
