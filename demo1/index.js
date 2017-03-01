import React from 'react';
import {render} from 'react-dom';
import * as actions from './actions';
import { createStore}  from 'redux';
import App from './app';
const initialState={
	name:'test',
	count:1
}

//reducer
function countReducer(state = initialState, action) {
	switch (action.type) {
		case actions.ADD_COUNT:
		return Object.assign({},state,{count:state.count+action.count});
		case actions.MINUS_COUNT:
		return Object.assign({},state,{count:state.count-action.count});
		case actions.CHANGE_NAME:
		return Object.assign({},state,{name:action.name});

		default:
		return Object.assign({},state);
	}
}

let store= createStore(countReducer);
render(
	<App store={store}/>,
	document.getElementById('content')
);
module.hot.accept();
