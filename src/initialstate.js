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
        questionArray: [],
				question: "",
				checkedBox: "",
				questionCount: 1,
				optionCount: 0,
				option1: "",
				option2: "",
				option3: "",
				answerCount: 1,
        points: 0,
        multiplier: 1,
        choice:"A3",
        mute: "Mute sound",
        data: null
			}
    }
};
