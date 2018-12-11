import React from 'react';
import PropTypes from 'prop-types';

import CatalogItem from 'components/Catalog/CatalogItem';

const CatalogItemPage = ({ product }) => (
  <main className="page -catalog-item">
    <h1 className="page_title">{product.title}</h1>
    <CatalogItem product={product} />
  </main>
);

CatalogItemPage.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default CatalogItemPage;
