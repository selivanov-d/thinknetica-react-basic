import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld';
import SimpleMath from './modules/SimpleMath';

// temporary examples of SimpleMath module usage
console.log(SimpleMath.add(4, 5));
console.log(SimpleMath.subtract(10, 1));
console.log(SimpleMath.multiply(3, 3));
console.log(SimpleMath.divide(27, 3));

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
