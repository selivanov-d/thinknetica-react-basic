import UPDATE_PRODUCT_IN_CART from 'constants/cart-action-types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_IN_CART: {
      const { product: newProduct, quantity } = action.payload;
      const newState = [...state];
      const productInCartIndex = state.findIndex(cartItem => cartItem.product.id === newProduct.id);

      if (productInCartIndex !== -1) {
        newState[productInCartIndex].quantity += quantity;
        return newState.filter(product => product.quantity > 0);
      }

      newState.push({ product: newProduct, quantity });
      return newState;
    }

    default:
      return state;
  }
};
