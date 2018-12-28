import { UPDATE_PRODUCT_IN_CART } from 'constants/action-types/cart';

export default store => next => (action) => {
  if (action.type !== UPDATE_PRODUCT_IN_CART) return next(action);

  const nextState = next(action);
  try {
    const state = store.getState();
    const cartJSON = JSON.stringify(state.cart);
    localStorage.setItem('cart', cartJSON);
  } catch (error) {
    console.log(error);
  }

  return nextState;
};
