import React from 'react';

const CartContext = React.createContext({
  itemsInCart: [],
  addItemToCart: () => {
  },
});

export default CartContext;
