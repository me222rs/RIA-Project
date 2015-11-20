/*
This is the initial state of the Redux Store. I store it in a separate file because I also use
it in the reducers when we do the Reset action.

It returns a function instead of an object to make sure no one can change the initial state.
*/

var C = require("./constants");

module.exports = function(){
    return {
        doStuff: {
            currentValue: "",
			currentSrcButton1: "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg",
			currentSrcButton2: "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg",
			currentSrcButton3: "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg",
			currentSrcButton4: "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg"
		},
			quiz:{
				questionValue: "",
				question: "How long is 5 minutes?",
				checkedBox: "",
				questionCount: 0,
				optionCount: 0,
				option1: "3 minutes",
				option2: "1 minutes",
				option3: "5 minutes",
				answerCount: 0,
        points: 0,
        multiplier: 1,
        choice:"A3",
        mute: "Mute sound"
			}
    }
};
