import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from 'constants/catalog-action-types';
import API_CALL from 'constants/api';
import {
  accessToken,
  contentTypeId,
  spaceId,
  apiBase,
} from 'constants/contentful';

const fetchProducts = () => ({
  [API_CALL]: {
    endpoint: `${apiBase}/spaces/${spaceId}/entries`,
    method: 'GET',
    query: {
      access_token: accessToken,
      content_type: contentTypeId,
    },
    types: [
      FETCH_PRODUCTS_REQUEST,
      FETCH_PRODUCTS_SUCCESS,
      FETCH_PRODUCTS_FAILURE,
    ],
  },
});

export default fetchProducts;
