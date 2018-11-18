import React from 'react';
import PropTypes from 'prop-types';

import currencyFormatter from '../../helpers/currencyFormatter';

const CartTotal = ({ totalRaw }) => {
  const totalFormatted = currencyFormatter(totalRaw);

  return (
    <div className="cart-container_total">
      Итого:
      <span className="font-weight-bold">{totalFormatted}</span>
    </div>
  );
};

CartTotal.propTypes = {
  totalRaw: PropTypes.number.isRequired,
};

export default CartTotal;
