import { CLEAR_CART } from 'constants/action-types/cart';
import { clearedCart } from 'actions/cart';

export default ({ dispatch }) => next => (action) => {
  if (action.type !== CLEAR_CART) return next(action);

  const nextState = next(action);

  try {
    localStorage.removeItem('cart');

    dispatch(clearedCart());
  } catch (error) {
    console.log(error);
  }

  return nextState;
};
