//Greeter.js
import React,{component} from 'react'; // 引入react模块
// var config = require('./config.json');
import config from './config.json';

// module.exports = function(){
// 	var greet = document.createElement('div');
// 	greet.textContent = config.greetText;
// 	return greet;
// };

class Greeter extends Component{
	render(){
		return(
			<div>
				{config.greetText}
			</div>
		);
	}
}