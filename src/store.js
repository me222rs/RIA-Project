/*
This file defines the main Redux Store. It will be required by all "smart" components in the app,
in our case Home and Hero.
*/

var Redux = require('redux'),
    doStuffReducer = require('./reducers/doStuff'),
    quizReducer = require('./reducers/quiz'),
	//rootReducer = require('./reducers'),
    initialState = require('./initialstate');
    thunk = require('redux-thunk'); // allows us to use asynchronous actions

// A super-simple logger
/*var logger = store => next => action => {
	console.log('dispatching', action.type,action)
	var result = next(action)
	console.log('next state', store.getState())
	return result
}*/
var reducers = Redux.combineReducers({
    doStuff: doStuffReducer,
	quiz: quizReducer
});
var store = Redux.createStore(reducers, initialState());
module.exports = store;
//module.exports = Redux.applyMiddleware(thunk,logger)(Redux.createStore)(reducers,initialState);
