import IndexPage from 'pages/IndexPage';
import { indexPagePath } from 'helpers/pathes';
import fetchProducts from 'actions/products';
import { loadCart } from 'actions/cart';

const ContactsPageRoute = {
  component: IndexPage,
  path: indexPagePath(),
  exact: true,
  prepareData: (store) => {
    store.dispatch(fetchProducts());

    if (!store.getState().cart.loaded) {
      store.dispatch(loadCart());
    }
  },
};

export default ContactsPageRoute;
