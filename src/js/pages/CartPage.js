import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { indexPagePath } from 'helpers/pathes';
import Cart from 'components/Cart/Cart';
import CartContext from 'contexts/CartContext';

class CartPage extends Component {
  static contextType = CartContext;

  render() {
    const { itemsInCart } = this.context;

    return (
      <main className="page -cart">
        <h1 className="page_title">Корзина</h1>
        {
          itemsInCart.length > 0
            ? <Cart />
            : (
              <Redirect to={{
                pathname: indexPagePath(),
                state: { redirectReason: 'Корзина пуста' },
              }}
              />
            )
        }
      </main>
    );
  }
}

export default CartPage;
