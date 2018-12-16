import PropTypes from 'prop-types';

import GalleryItemPropTypes from 'proptypes/gallery-item';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  gallery: PropTypes.arrayOf(GalleryItemPropTypes).isRequired,
});
