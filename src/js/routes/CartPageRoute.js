import CartPage from 'pages/CartPage';
import { cartPagePath } from 'helpers/pathes';

const CartPageRoute = {
  component: CartPage,
  path: cartPagePath(),
  exact: true,
};

export default CartPageRoute;
