import {
  UPDATE_PRODUCT_IN_CART,
  LOAD_CART,
  LOADED_CART,
  CLEAR_CART,
  CLEARED_CART,
} from 'constants/action-types/cart';

export const updateProductInCart = (product, quantity) => ({
  type: UPDATE_PRODUCT_IN_CART,
  payload: {
    product,
    quantity,
  },
});

export const loadCart = () => ({
  type: LOAD_CART,
  payload: {
    loaded: false,
  },
});

export const loadedCart = items => ({
  type: LOADED_CART,
  payload: {
    items,
    loaded: true,
  },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const clearedCart = () => ({
  type: CLEARED_CART,
});
