import React from 'react';
import ReactDOM from 'react-dom';

import Receipt from './modules/Receipt';
import ReceiptComponent from './components/Receipt';

const receipt = new Receipt();

// temporary example of Receipt module usage
receipt.add('flour');
receipt.add('flour');
receipt.remove('flour');
receipt.add('butter');
receipt.add('sugar');
receipt.add('yeast');

const appRoot = document.getElementById('app');

ReactDOM.render(<ReceiptComponent receipt={{receipt}}/>, appRoot);
