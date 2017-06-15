import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
//redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers.js';
import thunk from 'redux-thunk';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
//中间件
const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

//import 'babel-polyfill';
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('root'))