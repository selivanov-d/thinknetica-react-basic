import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';
import get from 'lodash/get';

import { indexPagePath } from 'helpers/pathes';
import CatalogItemsContainer from 'components/Catalog/CatalogItemsContainer';

class IndexPage extends Component {
  state = {
    alert: false,
  };

  componentWillMount() {
    this.showAlertOnce();
  }

  showAlertOnce() {
    const { history } = this.props;
    const alert = get(history, ['location', 'state', 'redirectReason']);

    if (alert) {
      this.setState({ alert });
      history.replace(indexPagePath(), {});
    }
  }

  render() {
    const { alert } = this.state;

    return (
      <>
        {
          alert && (
            <UncontrolledAlert color="info" className="page_alert">
              {alert}
            </UncontrolledAlert>
          )
        }

        <main className="page -catalog">
          <h1 className="page_title">Страница каталога</h1>
          <CatalogItemsContainer />
        </main>
      </>
    );
  }
}

IndexPage.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        redirectReason: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
