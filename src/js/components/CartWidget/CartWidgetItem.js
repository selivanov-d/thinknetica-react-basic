import React from 'react';
import PropTypes from 'prop-types';

const CartWidgetItem = ({ children }) => (
  <div className="cart-widget_item">
    {children}
  </div>
);

CartWidgetItem.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CartWidgetItem;
