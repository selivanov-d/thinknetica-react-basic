import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Navbar, Nav, NavItem } from 'reactstrap';

import routes from 'routes';
import CartContext from 'contexts/CartContext';
import products from 'constants/products';

class App extends Component {
  state = {
    cart: [],
  };

  get cartIsEmpty() {
    const { cart } = this.state;
    return cart.length <= 0;
  }

  changeItemQuantityInCart = (itemId, quantity) => {
    this.setState((state) => {
      const { cart } = state;

      if (this.cartIsEmpty) {
        this.addItemToCart(itemId, quantity);
      } else {
        const itemInCart = cart.some(cartItem => cartItem.id === itemId);

        if (itemInCart) {
          this.updateItemQuantityInCart(itemId, quantity);
        } else {
          this.addItemToCart(itemId, quantity);
        }
      }

      return ({
        cart,
      });
    });
  };

  addItemToCart(itemId, quantity) {
    const { cart } = this.state;
    const newProduct = products.find(item => item.id === itemId);

    cart.push({ ...newProduct, quantity });
  }

  removeItemFromCart(itemId) {
    this.setState((state) => {
      const { cart } = state;
      const newCart = cart.filter(item => item.id !== itemId);

      return {
        cart: newCart,
      };
    });
  }

  updateItemQuantityInCart(itemId, quantity) {
    const { cart } = this.state;

    const updatedItemIndex = cart.findIndex(item => item.id === itemId);
    const updatedItem = cart[updatedItemIndex];
    const newQuantity = updatedItem.quantity + quantity;

    if (newQuantity <= 0) {
      this.removeItemFromCart(itemId);
    } else {
      updatedItem.quantity = newQuantity;
    }
  }

  render() {
    const { cart } = this.state;
    const cartState = {
      itemsInCart: cart,
      changeItemQuantityInCart: this.changeItemQuantityInCart,
    };

    return (
      <Router>
        <CartContext.Provider value={cartState}>
          <Navbar color="light" light expand="md">
            <Nav navbar>
              <NavItem>
                <NavLink to="/" exact className="nav-link" activeClassName="active">
                  Главная
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contacts/" className="nav-link" activeClassName="active">
                  Контакты
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink to="/cart/" className="nav-link" activeClassName="active">
                  Корзина
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </CartContext.Provider>
      </Router>
    );
  }
}

export default App;
