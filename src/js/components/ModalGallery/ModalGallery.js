import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

import GalleryContext from 'contexts/GalleryContext';

import ModalGalleryCloseButton from 'components/ModalGallery/ModalGalleryCloseButton';
import ModalGalleryControl from 'components/ModalGallery/ModalGalleryControl';
import Image from 'components/utilities/Image';

class ModalGallery extends Component {
  static contextType = GalleryContext;

  threshold = 50;

  state = {
    touchStartPosition: null,
  };

  showPrevImage = () => {
    const {
      currentGalleryImage,
      changeCurrentGalleryImage,
      getPrevImageModalUrl,
    } = this.context;
    const { history } = this.props;

    changeCurrentGalleryImage(currentGalleryImage.index - 1);
    history.push(getPrevImageModalUrl());
  };

  showNextImage = () => {
    const {
      currentGalleryImage,
      changeCurrentGalleryImage,
      getNextImageModalUrl,
    } = this.context;
    const { history } = this.props;

    changeCurrentGalleryImage(currentGalleryImage.index + 1);
    history.push(getNextImageModalUrl());
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
    const touchEndPosition = event.changedTouches[0].clientX;

    if (this.canSwipeNext(touchStartPosition, touchEndPosition)) {
      this.showNextImage();
    }

    if (this.canSwipePrev(touchStartPosition, touchEndPosition)) {
      this.showPrevImage();
    }
  };

  render() {
    const {
      currentGalleryImage,
      getCurrentImageUrlById,
      getPrevImageModalUrl,
      getNextImageModalUrl,
    } = this.context;
    const { match: { params: { imageId } } } = this.props;

    const imageUrl = getCurrentImageUrlById(imageId);

    const modal = (
      <div className="modal">
        <ModalGalleryCloseButton />

        <div
          className="modal_body"
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
        >
          <Image src={imageUrl} className="modal_image" />
        </div>

        <div className="modal_controls">
          {
            !currentGalleryImage.first && (
              <ModalGalleryControl
                to={getPrevImageModalUrl()}
                onClick={this.showPrevImage}
                direction="prev"
              >
                <FontAwesomeIcon icon="chevron-circle-left" />
              </ModalGalleryControl>
            )
          }

          {
            !currentGalleryImage.last && (
              <ModalGalleryControl
                to={getNextImageModalUrl()}
                onClick={this.showNextImage}
                direction="next"
              >
                <FontAwesomeIcon icon="chevron-circle-right" />
              </ModalGalleryControl>
            )
          }
        </div>
      </div>
    );

    return (
      ReactDOM.createPortal(
        modal,
        document.body,
      )
    );
  }
}

ModalGallery.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      imageId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ModalGallery);
