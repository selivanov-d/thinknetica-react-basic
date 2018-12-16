import { createClient } from 'contentful';

import { productsRequestSuccess, productsRequestFail } from 'actions/catalog';
import contentfulConfig from 'constants/contentful';
import processProducts from 'helpers/process-products';

const fetchProducts = () => (dispatch) => {
  const client = createClient({
    space: contentfulConfig.spaceId,
    accessToken: contentfulConfig.accessToken,
  });

  client
    .getEntries({
      content_type: contentfulConfig.catalogItemType,
      select: contentfulConfig.catalogItemFields,
    })
    .then((response) => {
      const products = processProducts(response.items);
      dispatch(productsRequestSuccess(products));
    })
    .catch((error) => {
      dispatch(productsRequestFail(error));
    });
};

export default fetchProducts;
