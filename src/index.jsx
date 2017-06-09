import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import {HashRouter as Router,Route,Link} from 'react-router-dom';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

//import 'babel-polyfill';
ReactDOM.render(
	<Router>
		<App />
	</Router>
	,document.getElementById('root'))