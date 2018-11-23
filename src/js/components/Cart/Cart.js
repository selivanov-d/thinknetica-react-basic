import React, { Component } from 'react';

import CartContext from 'contexts/CartContext';
import CartItem from 'components/Cart/CartItem';
import CartTotalContainer from 'components/Cart/CartTotalContainer';

class Cart extends Component {
  static contextType = CartContext;

  render() {
    const { itemsInCart: items } = this.context;

    return (
      <div className="cart">
        <div className="cart_items">
          {
            items.map(item => (
              <CartItem item={item} key={item.id} />
            ))
          }
        </div>
        <CartTotalContainer items={items} />
      </div>
    );
  }
}

export default Cart;
