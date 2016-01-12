/*
 This is the initial state of the Redux Store. I store it in a separate file because I also use
 it in the reducers when we do the Reset action.

 It returns a function instead of an object to make sure no one can change the initial state.
 */

var C = require("./constants");

module.exports = function () {
    return {
        doStuff: {
            highscoreArray: [],
        },
        quiz: {
            questionValue: "If you pick the correct answer you will get 10 points and if you pick the wrong answer you will lose 10 points.For each correct answer your multiplier will increase which means more points from each question.The multiplier will be reset if you pick an incorrect answer. There is also a penalty in form of negative points if it takes 10 seconds or longer for you to answer.",
            currentQuestion: {options: []},
            questionCount: 1,
            points: 0,
            multiplier: 1,
            startTime: 0,
            endTime: 0,
            totalTimeScore: 0,
            totalScore: 0,
            showPostResult: false,
            correctAnswer: false,
            gameHasStarted: false,
            hasPostedScore:false
        }
    }
};
