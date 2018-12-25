import IndexPage from 'pages/IndexPage';
import { indexPagePath } from 'helpers/pathes';
import fetchProducts from 'actions/products';

const ContactsPageRoute = {
  component: IndexPage,
  path: indexPagePath(),
  exact: true,
  prepareData: ({ dispatch }) => {
    dispatch(fetchProducts());
  },
};

export default ContactsPageRoute;
