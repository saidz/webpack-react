//main.js
// 模块引入
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
// var greeter = require('./Greeter.js');

// document.getElementById('root').appendChild(greeter());
render(<Greeter />,document.getElementById('root'));
