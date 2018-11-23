import React from 'react';
import PropTypes from 'prop-types';

import CurrencyFormatter from 'components/utilities/CurrencyFormatter';

const ProductCardPrice = ({ value }) => (
  <div className="product-card_price">
    <CurrencyFormatter number={value} />
  </div>
);

ProductCardPrice.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ProductCardPrice;
