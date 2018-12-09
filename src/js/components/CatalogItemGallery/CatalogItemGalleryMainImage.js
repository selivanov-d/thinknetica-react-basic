import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GalleryContext from 'contexts/GalleryContext';

import Image from 'components/utilities/Image';
import CatalogItemGalleryModalTrigger from 'components/CatalogItemGallery/CatalogItemGalleryModalSwitcher';

class CatalogItemGalleryMainImage extends Component {
  static contextType = GalleryContext;

  threshold = 50;

  state = {
    touchStartPosition: null,
  };

  canSwipeNext = (touchStartPosition, touchEndPosition) => {
    const { currentGalleryImage } = this.context;
    return (touchStartPosition - touchEndPosition) > this.threshold && !currentGalleryImage.last;
  };

  canSwipePrev = (touchStartPosition, touchEndPosition) => {
    const { currentGalleryImage } = this.context;
    return (touchEndPosition - touchStartPosition) > this.threshold && !currentGalleryImage.first;
  };

  onTouchStart = (event) => {
    const touchStartPosition = event.touches[0].clientX;

    this.setState({
      touchStartPosition,
    });
  };

  onTouchEnd = (event) => {
    const { touchStartPosition } = this.state;
    const { currentGalleryImage, changeCurrentGalleryImage } = this.context;
    const touchEndPosition = event.changedTouches[0].clientX;

    if (this.canSwipeNext(touchStartPosition, touchEndPosition)) {
      changeCurrentGalleryImage(currentGalleryImage.index + 1);
    }

    if (this.canSwipePrev(touchStartPosition, touchEndPosition)) {
      changeCurrentGalleryImage(currentGalleryImage.index - 1);
    }
  };

  render() {
    const { imageUrl, alt } = this.props;
    const { getCurrentImageModalUrl } = this.context;

    return (
      <div
        className="catalog-item-gallery_big-image"
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
      >
        <CatalogItemGalleryModalTrigger to={getCurrentImageModalUrl()} />

        <Image src={imageUrl} alt={alt} className="catalog-item_image" />
      </div>
    );
  }
}

CatalogItemGalleryMainImage.defaultProps = {
  alt: '',
};

CatalogItemGalleryMainImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default CatalogItemGalleryMainImage;
