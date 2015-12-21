var initialState = require('./../initialstate');
var _ = require('lodash');
var C = require("../constants");
Firebase = require("firebase"),
fb = new Firebase(C.FIREBASE);

var QuizReducer = function (state, action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'NEXT_QUESTION':
            //This happens if answer is correct
            if (newState.questionArray[newState.questionCount - 1].answerID === action.answer) {
                newState.correctAnswer = true;

                //Calculating points
                var questionTime = Math.floor((new Date().getTime() - newState.startTime) / 1000);
                newState.points += 10 * newState.multiplier;
                newState.multiplier += 1;
                newState.questionValue = "Correct! " + ((10 - questionTime)+(10 * (newState.multiplier-1))) + " points.";
                newState.totalTimeScore += 10 - questionTime;

                //Starts the timer
                newState.startTime = new Date().getTime();

                //Next question in array
                if (newState.questionArray.length - 1 >= newState.questionCount) {
                    newState.currentQuestion = newState.questionArray[newState.questionCount];
                    newState.questionCount += 1;
                }
                //This happens when game is done
                else {
                  newState.gameHasStarted = false;
                  newState.showPostResult = true;
                  var totalScore = newState.points + newState.totalTimeScore;
                  newState.totalScore = totalScore;
                  newState.questionValue = "Well done! You got " + totalScore + " points!";
                }
            }
            //This happens if your answer is incorrect
            else {
                newState.correctAnswer = false;
                newState.points -= 10;
                newState.multiplier = 1;
                newState.questionValue = "Wrong!";
            }
            return newState;

        case 'DO_STUFF':
            //Sets all valiables to their initial value
            newState.points = 0;
            newState.startTime = 0;
            newState.endTime = 0;
            newState.questionCount = 1;
            newState.multiplier = 1;
            newState.totalTimeScore = 0;
            newState.gameHasStarted = true;

            //Starts the timer
            newState.startTime = new Date().getTime();
            newState.questionArray = _.shuffle(newState.questionArray);
            newState.currentQuestion = newState.questionArray[newState.questionCount - 1];
            return newState;

        case 'POST_SCORE':
          //Pushes the score and name to firebase
          var myFireRef = new Firebase(C.FIREBASE+"/score");
          fb.push({
            name: action.name,
            score: newState.totalScore
          });
            newState.showPostResult = false;
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;
