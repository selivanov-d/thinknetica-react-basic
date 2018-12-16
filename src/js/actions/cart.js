import UPDATE_PRODUCT_IN_CART from 'constants/cart-action-types';

const updateProductInCart = (product, quantity) => ({
  type: UPDATE_PRODUCT_IN_CART,
  payload: {
    product,
    quantity,
  },
});

export default updateProductInCart;
