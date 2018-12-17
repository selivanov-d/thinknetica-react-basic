import PropTypes from 'prop-types';

import ProductPropTypes from 'proptypes/product';

export default PropTypes.shape({
  product: ProductPropTypes,
  quantity: PropTypes.number,
});
