/*
This module contains action creators dealing with `appState.quotes`
*/

var C = require("./constants"),
	Firebase = require("firebase"),
	quotesRef = new Firebase(C.FIREBASE);

module.exports = {
	// called when the app starts. this means we immediately download all quotes, and
	// then receive all quotes again as soon as anyone changes anything.
	startListeningToScores: function(){
		return function(dispatch,getState){
			quotesRef.on("value",function(snapshot){
				dispatch({ type: 'GET_SCORES', data: snapshot.val() });
			});
		}
	}




};
