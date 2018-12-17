import React from 'react';

import ProductPropTypes from 'proptypes/product';
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
  product: ProductPropTypes.isRequired,
};

export default CatalogItem;
