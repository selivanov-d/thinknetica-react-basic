import React from 'react';
import PropTypes from 'prop-types';

import products from 'constants/products';
import CatalogItem from 'components/Catalog/CatalogItem';

const CatalogItemPage = ({ match }) => {
  const { id } = match.params;

  const product = products.find(item => item.id === +id);

  return (
    <main className="page -catalog-item">
      <h1 className="page_title">{product.title}</h1>
      <CatalogItem product={product} />
    </main>
  );
};

CatalogItemPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default CatalogItemPage;
