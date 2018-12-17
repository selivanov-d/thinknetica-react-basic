import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CatalogItemGallerySecondaryItem from 'components/CatalogItemGallery/CatalogItemGallerySecondaryItem';
import GalleryContext from 'contexts/GalleryContext';
import GalleryItemPropTypes from 'proptypes/gallery-item';

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
  images: PropTypes.arrayOf(GalleryItemPropTypes).isRequired,
};

export default CatalogItemGallerySecondaryItems;
