import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import GalleryContent from 'contexts/GalleryContext';
import CatalogItemGallery from 'components/CatalogItemGallery/CatalogItemGallery';
import { catalogItemModalPath } from 'helpers/pathes';
import CatalogItemModalRoute from 'routes/CatalogItemModalRoute';

class CatalogItemGalleryContainer extends Component {
  static contextType = GalleryContent;

  state = {
    currentGalleryImage: {
      index: 0,
      first: true,
      last: false,
    },
  };

  getCurrentImage = () => {
    const { images } = this.props;
    const { currentGalleryImage } = this.state;
    return images[currentGalleryImage.index];
  };

  getPrevImage = () => {
    const { images } = this.props;
    const { currentGalleryImage } = this.state;
    return images[currentGalleryImage.index - 1];
  };

  getNextImage = () => {
    const { images } = this.props;
    const { currentGalleryImage } = this.state;

    return images[currentGalleryImage.index + 1];
  };

  getCurrentImageUrl = () => this.getCurrentImage().imageUrl;

  getCurrentImageUrlById = (imageId) => {
    const { images } = this.props;

    return images.find(image => image.id === imageId).imageUrl;
  };

  getCurrentImageModalUrl = () => {
    const { match: { params: { id } } } = this.props;
    return catalogItemModalPath(id, this.getCurrentImage().id);
  };

  getPrevImageModalUrl = () => {
    const { match: { params: { id } } } = this.props;

    return catalogItemModalPath(id, this.getPrevImage().id);
  };

  getNextImageModalUrl = () => {
    const { match: { params: { id } } } = this.props;

    return catalogItemModalPath(id, this.getNextImage().id);
  };

  changeCurrentGalleryImage = (newCurrentGalleryImage) => {
    const { images } = this.props;

    this.setState({
      currentGalleryImage: {
        index: newCurrentGalleryImage,
        first: newCurrentGalleryImage === 0,
        last: newCurrentGalleryImage === images.length - 1,
      },
    });
  };

  render() {
    const {
      getCurrentImage,
      getCurrentImageUrl,
      getCurrentImageUrlById,
      getPrevImageModalUrl,
      getNextImageModalUrl,
      getCurrentImageModalUrl,
      changeCurrentGalleryImage,
    } = this;
    const { currentGalleryImage } = this.state;
    const { images } = this.props;

    const data = {
      currentGalleryImage,
      images,
      getCurrentImage,
      getCurrentImageUrl,
      getCurrentImageUrlById,
      getPrevImageModalUrl,
      getNextImageModalUrl,
      getCurrentImageModalUrl,
      changeCurrentGalleryImage,
    };

    return (
      <GalleryContent.Provider value={data}>
        {
          images && (
            <CatalogItemGallery images={images} />
          )
        }

        {renderRoutes([CatalogItemModalRoute])}
      </GalleryContent.Provider>
    );
  }
}

CatalogItemGalleryContainer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default withRouter(CatalogItemGalleryContainer);
