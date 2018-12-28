import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from 'constants/action-types/catalog';

import processProductsResponse from 'helpers/process-products-response';

const INITIAL_STATE = {
  products: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
    case FETCH_PRODUCT_REQUEST:
      return state;
    case FETCH_PRODUCTS_SUCCESS:
    case FETCH_PRODUCT_SUCCESS: {
      const products = processProductsResponse(action.payload);
      return Object.assign({}, state, { products });
    }
    case FETCH_PRODUCTS_FAILURE:
    case FETCH_PRODUCT_FAILURE:
      return Object.assign({}, state, { error: `Something went very wrong: ${action.payload.error}` });
    default:
      return state;
  }
};
