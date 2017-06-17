import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
//redux
import { Provider } from 'react-redux'
import { compose,createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers.js';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist'


import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
//中间件
const middleware = [thunk];


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
  //autoRehydrate()//持久化数据自动恢复
)
persistStore(store);
//import 'babel-polyfill';
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('root'))