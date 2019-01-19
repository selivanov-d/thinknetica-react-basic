import CartPage from 'pages/CartPage';
import { cartPagePath } from 'helpers/pathes';
import { loadCart } from 'actions/cart';

const CartPageRoute = {
  component: CartPage,
  path: cartPagePath(),
  exact: true,
  prepareData: (store) => {
    if (!store.getState().cart.loaded) {
      store.dispatch(loadCart());
    }
  },
};

export default CartPageRoute;
