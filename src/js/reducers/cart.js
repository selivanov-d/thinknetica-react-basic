import {
  UPDATE_PRODUCT_IN_CART,
  LOAD_CART,
  LOADED_CART,
} from 'constants/action-types/cart';

const INITIAL_STATE = { items: [], loaded: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_IN_CART: {
      const { product: newProduct, quantity } = action.payload;
      const newState = Object.assign({}, state);
      const productInCartIndex = state.items.findIndex(
        cartItem => cartItem.product.id === newProduct.id,
      );

      if (productInCartIndex !== -1) {
        newState.items[productInCartIndex].quantity += quantity;
        newState.items = newState.items.filter(product => product.quantity > 0);
        return newState;
      }

      newState.items.push({ product: newProduct, quantity });
      return newState;
    }

    case LOAD_CART: {
      const { loaded } = action.payload;
      return Object.assign({}, state, { loaded });
    }

    case LOADED_CART: {
      const { items, loaded } = action.payload;
      return Object.assign({}, state, { items, loaded });
    }

    default:
      return state;
  }
};
