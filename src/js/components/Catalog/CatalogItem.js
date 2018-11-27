import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/utilities/Image';

const CatalogItem = ({ product: { title, imageUrl, longDescription } }) => (
  <div className="catalog-item">
    <div className="catalog-item_wrapper">
      <Image src={imageUrl} alt={title} className="catalog-item_image" />
    </div>
    <p className="catalog-item_description">{longDescription}</p>
  </div>
);

CatalogItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default CatalogItem;
