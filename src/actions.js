/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/

var constants = require("./constants");

module.exports = {
	doStuff: function(){
        return {type: 'DO_STUFF'};
    },
	doMoreStuff: function(){
        return {type: 'DO_MORE_STUFF'};
    },
		button1: function(){
        return {type: 'BUTTON1'};
    },
		button2: function(){
        return {type: 'BUTTON2'};
    },
		button3: function(){
        return {type: 'BUTTON3'};
    },
		button4: function(){
        return {type: 'BUTTON4'};
    },
		quiz: function(answer){
        return {type: 'NEXT_QUESTION', answer:answer};
    },
		question: function(){
        return {type: 'QUESTION'};
    }


};
