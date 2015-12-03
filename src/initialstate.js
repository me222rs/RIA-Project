/*
 This is the initial state of the Redux Store. I store it in a separate file because I also use
 it in the reducers when we do the Reset action.

 It returns a function instead of an object to make sure no one can change the initial state.
 */

var C = require("./constants");

module.exports = function () {
    return {
        doStuff: {
            currentValue: "",
            currentSrcButtons: ["https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg",
                "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg",
                "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg",
                "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg"],
        },
        quiz: {
            questionValue: "",
            questionArray: [{
                question: "blabla?",
                answer: "bla",
                options: ["blabla", "blablabla", "bla"],
                answerID: "A3"
            }, {
                question: "Who is the president if the United States?",
                answer: "Barack Obama",
                options: ["Angela Merkel", "Barack Obama", "David Cameron"],
                answerID: "A2"
            }, {
                question: "Do you like cookies?",
                answer: "Yes",
                options: ["Yes", "No", "Dont know"],
                answerID: "A1"
            }],
            currentQuestion: {options: []},
            questionCount: 1,
            points: 0,
            multiplier: 1,
            choice: "A3",
            mute: "Mute sound",
            data: null,
            flipped: false,
            startTime: 0,
            endTime: 0,
            totalTimeScore: 0
        }
    }
};
