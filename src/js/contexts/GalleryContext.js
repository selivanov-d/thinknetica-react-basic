import React from 'react';
import noop from 'lodash-es/noop';

const GalleryContext = React.createContext({
  currentGalleryImage: {
    index: 0,
    first: true,
    last: false,
  },
  getCurrentImageUrl: noop,
  getCurrentImageUrlById: noop,
  getPrevImageModalUrl: noop,
  getNextImageModalUrl: noop,
  getCurrentImageModalUrl: noop,
  changeCurrentGalleryImage: noop,
});

export default GalleryContext;
