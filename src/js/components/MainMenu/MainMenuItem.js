import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

const MainMenuItem = ({ to, children }) => (
  <NavItem>
    <NavLink to={to} exact className="nav-link" activeClassName="active">
      {children}
    </NavLink>
  </NavItem>
);

MainMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default MainMenuItem;
