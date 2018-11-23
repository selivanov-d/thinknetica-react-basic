import React from 'react';
import PropTypes from 'prop-types';

import CurrencyFormatter from 'components/utilities/CurrencyFormatter';

const CartWidgetTotal = ({ totalRaw }) => (
  <div className="cart-widget_total">
    Итого:
    {' '}
    <span className="font-weight-bold">
      <CurrencyFormatter number={totalRaw} />
    </span>
  </div>
);

CartWidgetTotal.propTypes = {
  totalRaw: PropTypes.number.isRequired,
};

export default CartWidgetTotal;
