import React from 'react';
import PropTypes from 'prop-types';

import currencyFormatter from '../../helpers/currencyFormatter';

const ProductCardPrice = ({ value }) => (
  <div className="product-card_price">{currencyFormatter(value)}</div>
);

ProductCardPrice.defaultProps = {
  value: '--',
};

ProductCardPrice.propTypes = {
  value: PropTypes.number,
};

export default ProductCardPrice;
