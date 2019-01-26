import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from 'constants/action-types/catalog';
import {
  cdnAccessToken,
  catalogItemContentTypeId,
  spaceId,
  environmentId,
  cdnBase,
} from 'constants/contentful';
import API_CALL from 'constants/action-types/api';

const fetchProducts = () => ({
  [API_CALL]: {
    endpoint: `${cdnBase}/spaces/${spaceId}/environments/${environmentId}/entries`,
    method: 'GET',
    query: {
      access_token: cdnAccessToken,
      content_type: catalogItemContentTypeId,
    },
    types: [
      FETCH_PRODUCTS_REQUEST,
      FETCH_PRODUCTS_SUCCESS,
      FETCH_PRODUCTS_FAILURE,
    ],
  },
});

export default fetchProducts;
