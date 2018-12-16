import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from 'constants/catalog-action-types';

export const productsRequestFail = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: {
    error,
  },
});

export const productsRequestSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});
