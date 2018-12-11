import React from 'react';

import CartWidget from 'components/CartWidget/CartWidget';

const CartWidgetContainer = props => (
  <aside className="cart-widget">
    <CartWidget {...props} />
  </aside>
);

export default CartWidgetContainer;
