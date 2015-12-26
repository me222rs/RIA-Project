/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/

var C = require("./constants");
Firebase = require("firebase"),
fb = new Firebase(C.FIREBASE);
//Gets the questions
var questionArray = require('./questions');
var _ = require('lodash');

module.exports = {
		doStuff: function(){
				//Shuffle the questions in random order when the start button is pressed
				console.log(questionArray);
				questionArray = _.shuffle(questionArray);
				console.log(questionArray);
        return {type: 'DO_STUFF' , startTime: new Date().getTime(), questionArray: questionArray};
    },
		quiz: function(answer){
        return {type: 'NEXT_QUESTION', answer:answer, startTime: new Date().getTime(), questionArray: questionArray};
    },
		postScore: function(name, score){
			//Pushes the score and name to firebase
			var myFireRef = new Firebase(C.FIREBASE+"/score");
			fb.push({
				name: name,
				score: score
			});
			return{type: 'POST_SCORE', name:name};
		},
};
