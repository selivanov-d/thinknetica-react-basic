import React from 'react';
import noop from 'lodash/noop';

const CartContext = React.createContext({
  itemsInCart: [],
  changeItemQuantityInCart: noop,
});

export default CartContext;
