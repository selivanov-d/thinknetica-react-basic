import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faTimesCircle,
  faExpandArrowsAlt,
} from '@fortawesome/fontawesome-free-solid';

import App from 'components/App';

fontawesome.library.add(
  faChevronCircleLeft,
  faChevronCircleRight,
  faTimesCircle,
  faExpandArrowsAlt,
);

const appRoot = document.getElementById('app');

ReactDOM.render(<App />, appRoot);
