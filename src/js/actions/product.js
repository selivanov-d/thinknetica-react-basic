import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from 'constants/action-types/catalog';
import {
  cdnAccessToken,
  catalogItemContentTypeId,
  spaceId,
  environmentId,
  cdnBase,
} from 'constants/contentful';
import API_CALL from 'constants/action-types/api';

const fetchProduct = productId => ({
  [API_CALL]: {
    endpoint: `${cdnBase}/spaces/${spaceId}/environments/${environmentId}/entries`,
    method: 'GET',
    query: {
      access_token: cdnAccessToken,
      content_type: catalogItemContentTypeId,
      'sys.id[in]': productId,
    },
    types: [
      FETCH_PRODUCT_REQUEST,
      FETCH_PRODUCT_SUCCESS,
      FETCH_PRODUCT_FAILURE,
    ],
  },
});

export default fetchProduct;
