import React from 'react';
import PropTypes from 'prop-types';

import CatalogItemGalleryContainer from 'components/CatalogItemGallery/CatalogItemGalleryContainer';

const CatalogItem = ({ product: { title, gallery, longDescription } }) => (
  <div className="catalog-item">
    <div className="catalog-item_wrapper">
      <CatalogItemGalleryContainer images={gallery} title={title} />
    </div>
    <p className="catalog-item_description">{longDescription}</p>
  </div>
);

CatalogItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default CatalogItem;
