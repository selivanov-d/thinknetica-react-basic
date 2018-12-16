import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { cartPagePath } from 'helpers/pathes';
import CartWidgetEmpty from 'components/CartWidget/CartWidgetEmpty';
import CartWidgetItemContainer from 'components/CartWidget/CartWidgetItemContainer';
import CartWidgetTotalContainer from 'components/CartWidget/CartWidgetTotalContainer';
import CartItemPropTypes from 'proptypes/cart-item';

class CartWidget extends Component {
  state = {
    dropReady: false,
  };

  toggleDropState = () => {
    this.setState(state => ({ dropReady: !state.dropReady }));
  };

  onDrop = (event) => {
    const { changeItemQuantityInCart } = this.props;
    const productToAdd = JSON.parse(event.dataTransfer.getData('text'));

    changeItemQuantityInCart(productToAdd, 1);
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
        className={cn('cart-widget', { '-drop-ready': dropReady })}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        <div className="cart-widget_body">
          <h3>
            <Link to={cartPagePath()}>Корзина</Link>
          </h3>
          {
            items.length > 0 && (
              <div className="cart-widget_items">
                {
                  items.map(item => (
                    <CartWidgetItemContainer
                      product={item.product}
                      quantity={item.quantity}
                      key={item.product.id}
                    />
                  ))
                }

                <CartWidgetTotalContainer items={items} />
              </div>
            )
          }

          {items.length === 0 && <CartWidgetEmpty />}
        </div>
      </div>
    );
  }
}

CartWidget.propTypes = {
  items: PropTypes.arrayOf(CartItemPropTypes).isRequired,
  changeItemQuantityInCart: PropTypes.func.isRequired,
};

export default CartWidget;
