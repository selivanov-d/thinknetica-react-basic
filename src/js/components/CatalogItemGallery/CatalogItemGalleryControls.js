import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GalleryContext from 'contexts/GalleryContext';

import CatalogItemGalleryControl from 'components/CatalogItemGallery/CatalogItemGalleryControl';

class CatalogItemGalleryControls extends Component {
  static contextType = GalleryContext;

  showPrevImage = () => {
    const { currentGalleryImage, changeCurrentGalleryImage } = this.context;
    changeCurrentGalleryImage(currentGalleryImage.index - 1);
  };

  showNextImage = () => {
    const { currentGalleryImage, changeCurrentGalleryImage } = this.context;
    changeCurrentGalleryImage(currentGalleryImage.index + 1);
  };

  render() {
    const { currentGalleryImage } = this.context;

    return (
      <div className="catalog-item-gallery_controls">
        <CatalogItemGalleryControl
          direction="prev"
          disabled={currentGalleryImage.first}
          onClick={this.showPrevImage}
        >
          <FontAwesomeIcon icon="chevron-circle-left" />
        </CatalogItemGalleryControl>
        <CatalogItemGalleryControl
          direction="next"
          disabled={currentGalleryImage.last}
          onClick={this.showNextImage}
        >
          <FontAwesomeIcon icon="chevron-circle-right" />
        </CatalogItemGalleryControl>
      </div>
    );
  }
}

export default CatalogItemGalleryControls;
