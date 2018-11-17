import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import CartEmpty from './CartEmpty';
import CartItemContainer from './CartItemContainer';
import CartTotalContainer from './CartTotalContainer';

class Cart extends Component {
  state = {
    dropReady: false,
  };

  toggleDropState = () => {
    this.setState(state => ({ dropReady: !state.dropReady }));
  };

  onDrop = (event) => {
    const { addItemToCart } = this.props;
    const productToAdd = JSON.parse(event.dataTransfer.getData('text'));

    addItemToCart(productToAdd, 1);
    this.toggleDropState();
  };

  onDragOver = (event) => {
    event.preventDefault();
  };

  onDragEnter = () => {
    this.toggleDropState();
  };

  onDragLeave = () => {
    this.toggleDropState();
  };

  render() {
    const { dropReady } = this.state;
    const { items } = this.props;

    return (
      <div
        className={cn('cart-container_cart', { '-drop-ready': dropReady })}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        <h3>Корзина</h3>
        {
          items.length > 0 && (
            <div className="cart">
              {
                items.map(item => (
                  <CartItemContainer item={item} key={item.id} />
                ))
              }
              {
                items.length > 0 && (
                  <CartTotalContainer items={items} />
                )
              }
            </div>
          )
        }

        {items.length === 0 && <CartEmpty />}
      </div>
    );
  }
}

Cart.defaultProps = {
  items: [],
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  addItemToCart: PropTypes.func.isRequired,
};

export default Cart;
