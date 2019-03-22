/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import Auth from './Auth';
const auth = new Auth();
console.log(auth);
let state = {}
window.setState = (initialState) => {
	state = Object.assign({}, initialState);
	ReactDOM.render(
		<Provider store={store}>
			<App {...state} />
		</Provider>, document.getElementById('root'));
}

const store = createStore(rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



let initialState = {
	name: 'todolist',
	location: location.pathname.replace(/^\/?|\/$/g, ""),
	auth
};
window.setState(initialState);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
