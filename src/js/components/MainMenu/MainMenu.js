import React from 'react';
import { Nav, Navbar } from 'reactstrap';

import { cartPagePath, contactsPagePath, indexPagePath } from 'helpers/pathes';
import MainMenuItem from 'components/MainMenu/MainMenuItem';

const MainMenu = () => (
  <Navbar color="light" light expand="md">
    <Nav navbar>
      <MainMenuItem to={indexPagePath()}>Главная</MainMenuItem>
      <MainMenuItem to={contactsPagePath()}>Контакты</MainMenuItem>
      <MainMenuItem to={cartPagePath()}>Корзина</MainMenuItem>
    </Nav>
  </Navbar>
);

export default MainMenu;
