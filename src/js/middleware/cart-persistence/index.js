import saveCart from 'middleware/cart-persistence/save';
import loadCart from 'middleware/cart-persistence/load';
import clearCart from 'middleware/cart-persistence/clear';

export default [
  saveCart,
  loadCart,
  clearCart,
];
