import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from 'constants/action-types/catalog';
import {
  accessToken,
  contentTypeId,
  spaceId,
  apiBase,
} from 'constants/contentful';
import API_CALL from 'constants/action-types/api';

const fetchProduct = productId => ({
  [API_CALL]: {
    endpoint: `${apiBase}/spaces/${spaceId}/entries`,
    method: 'GET',
    query: {
      access_token: accessToken,
      content_type: contentTypeId,
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
