import React from 'react';

import currencyFormatter from '../../helpers/currencyFormatter';

const Price = ({value}) => {
  return (
    <div className="font-weight-bold">{currencyFormatter(value)}</div>
  )
};

export default Price;
