import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CatalogItemGallerySecondaryItem from 'components/CatalogItemGallery/CatalogItemGallerySecondaryItem';
import GalleryContext from 'contexts/GalleryContext';

class CatalogItemGallerySecondaryItems extends Component {
  static contextType = GalleryContext;

  render() {
    const { images } = this.props;
    const { currentGalleryImage } = this.context;

    return (
      <div className="catalog-item-gallery_small-images">
        {
          images.map((image, index) => {
            const { id } = image;
            const active = index === currentGalleryImage.index;

            return (
              <CatalogItemGallerySecondaryItem
                key={id}
                active={active}
                index={index}
                image={image}
              />
            );
          })
        }
      </div>
    );
  }
}

CatalogItemGallerySecondaryItems.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
  })).isRequired,
};

export default CatalogItemGallerySecondaryItems;
