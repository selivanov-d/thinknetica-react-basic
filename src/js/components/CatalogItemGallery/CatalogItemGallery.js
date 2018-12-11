import React, { Component } from 'react';

import GalleryContext from 'contexts/GalleryContext';
import CatalogItemGalleryMainImage from 'components/CatalogItemGallery/CatalogItemGalleryMainImage';
import CatalogItemGallerySecondaryItems from 'components/CatalogItemGallery/CatalogItemGallerySecondaryItems';
import CatalogItemGalleryControls from 'components/CatalogItemGallery/CatalogItemGalleryControls';

class CatalogItemGallery extends Component {
  static contextType = GalleryContext;

  render() {
    const { images, getCurrentImageUrl } = this.context;
    const activeImageUrl = getCurrentImageUrl();

    return (
      <div className="catalog-item-gallery">
        <div className="catalog-item-gallery_stage-wrapper">
          {
            activeImageUrl && (
              <CatalogItemGalleryMainImage imageUrl={activeImageUrl} />
            )
          }
          {
            images.length > 1 && (
              <CatalogItemGalleryControls />
            )
          }
        </div>
        {
          images.length > 1 && (
            <CatalogItemGallerySecondaryItems images={images} />
          )
        }
      </div>
    );
  }
}

export default CatalogItemGallery;
