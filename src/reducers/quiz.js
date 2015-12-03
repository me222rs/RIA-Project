var initialState = require('./../initialstate');
var _ = require('lodash');
var QuizReducer = function (state, action) {
    var newState = Object.assign({}, state);


    switch (action.type) {
        case 'NEXT_QUESTION':
            console.log("Question before if: " + newState.questionCount);
            if (newState.questionArray[newState.questionCount - 1].answerID === action.answer) {
                //Calculating points

                var questionTime = Math.floor((new Date().getTime() - newState.startTime) / 1000);
                newState.points += 10 * newState.multiplier;
                newState.multiplier += 1;

                //Sets the correct variable
                newState.questionValue = "Correct! " + ((10 - questionTime)+(10 * (newState.multiplier-1))) + " points.";
                newState.totalTimeScore += 10 - questionTime;
                newState.startTime = new Date().getTime();
                //Next question in array
                if (newState.questionArray.length - 1 >= newState.questionCount) {
                    newState.currentQuestion = newState.questionArray[newState.questionCount];

                    newState.questionCount += 1;
                }
                else {
                    var totalScore = newState.points + newState.totalTimeScore;
                    newState.questionValue = "Well done! You got " + totalScore + " points!";
                    document.getElementById("buttonNext").style.visibility = "hidden";
                    document.getElementById("buttonStart").style.visibility = "hidden";
                }
            }
            else {
                newState.points -= 10;
                newState.multiplier = 1;
                newState.questionValue = "Wrong!";
            }
            return newState;
        case 'DO_STUFF':
            newState.startTime = new Date().getTime();
            newState.questionArray = _.shuffle(newState.questionArray);
            document.getElementById("buttonStart").style.visibility = "hidden";
            document.getElementById("buttonNext").style.visibility = "visible";
            newState.currentQuestion = newState.questionArray[newState.questionCount - 1];
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;
