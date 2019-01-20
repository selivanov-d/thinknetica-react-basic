import CartCheckoutPage from 'pages/CartCheckoutPage';
import { cartCheckoutPagePath } from 'helpers/pathes';
import { loadCart } from 'actions/cart';

const CartCheckoutPageRoute = {
  component: CartCheckoutPage,
  path: cartCheckoutPagePath(),
  exact: true,
  prepareData: (store) => {
    if (!store.getState().cart.loaded) {
      store.dispatch(loadCart());
    }
  },
};

export default CartCheckoutPageRoute;
