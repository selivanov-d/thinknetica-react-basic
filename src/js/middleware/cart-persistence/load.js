import { LOAD_CART } from 'constants/action-types/cart';
import { loadedCart } from 'actions/cart';

export default ({ dispatch }) => next => (action) => {
  if (action.type !== LOAD_CART) return next(action);

  const nextState = next(action);

  try {
    const cartJSON = localStorage.getItem('cart');

    let cartItems = [];

    if (cartJSON) {
      cartItems = JSON.parse(cartJSON).items;
    }

    dispatch(loadedCart(cartItems));
  } catch (error) {
    console.log(error);
  }

  return nextState;
};
