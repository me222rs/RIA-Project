/*
This file defines the main Redux Store. It will be required by all "smart" components in the app,
in our case Home and Hero.
*/

var Redux = require('redux'),
    highscoreReducer = require('./reducers/highscore'),
    quizReducer = require('./reducers/quiz'),
    initialState = require('./initialstate'),
    thunk = require('redux-thunk'); // allows us to use asynchronous actions

var reducers = Redux.combineReducers({
  doStuff: highscoreReducer,
	quiz: quizReducer
});
var store = Redux.createStore(reducers, initialState());
module.exports = store;
