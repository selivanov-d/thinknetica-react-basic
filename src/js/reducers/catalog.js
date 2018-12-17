import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from 'constants/catalog-action-types';

const INITIAL_STATE = {
  products: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, action.payload);
    case FETCH_PRODUCTS_FAILURE:
      return Object.assign({}, state, { error: `Something went very wrong: ${action.payload.error}` });
    default:
      return state;
  }
};
