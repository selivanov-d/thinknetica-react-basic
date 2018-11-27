import React from 'react';

const CartContext = React.createContext({
  itemsInCart: [],
  changeItemQuantityInCart: () => {
  },
});

export default CartContext;
