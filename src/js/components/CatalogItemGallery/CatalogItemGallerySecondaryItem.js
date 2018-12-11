import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import GalleryContext from 'contexts/GalleryContext';
import Image from 'components/utilities/Image';

class CatalogItemGallerySecondaryItem extends Component {
  static contextType = GalleryContext;

  setThisItemActive = () => {
    const { changeCurrentGalleryImage } = this.context;
    const { index } = this.props;
    changeCurrentGalleryImage(index);
  };

  render() {
    const { active, image: { title, imageUrl } } = this.props;

    return (
      <button
        type="button"
        className={
          cn(
            'catalog-item-gallery_small-image-wrapper',
            { '-active': active },
          )
        }
        onClick={this.setThisItemActive}
      >
        <Image src={imageUrl} alt={title} className="catalog-item-gallery_small-image" />
      </button>
    );
  }
}

CatalogItemGallerySecondaryItem.defaultProps = {
  active: false,
};

CatalogItemGallerySecondaryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool,
};

export default CatalogItemGallerySecondaryItem;
