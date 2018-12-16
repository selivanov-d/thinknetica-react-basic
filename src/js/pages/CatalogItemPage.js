import React from 'react';

import ProductPropTypes from 'proptypes/cart-item';
import CatalogItem from 'components/Catalog/CatalogItem';

const CatalogItemPage = ({ product }) => (
  <main className="page -catalog-item">
    <h1 className="page_title">{product.title}</h1>
    <CatalogItem product={product} />
  </main>
);

CatalogItemPage.propTypes = {
  product: ProductPropTypes.isRequired,
};

export default CatalogItemPage;
