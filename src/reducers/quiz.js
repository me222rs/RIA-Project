var initialState = require('./../initialstate');
var C = require("../constants");

var QuizReducer = function (state, action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'NEXT_QUESTION':
            //This happens if answer is correct
            if (action.questionArray[newState.questionCount - 1].answerID === action.answer) {
                newState.correctAnswer = true;

                //Calculating points
                var questionTime = Math.floor((action.startTime - newState.startTime) / 1000);
                newState.points += 10 * newState.multiplier;
                newState.multiplier += 1;
                newState.questionValue = action.questionArray[newState.questionCount-1].answer+ " (" + ((10 - questionTime)+(10 * (newState.multiplier-1))) + " points.)";
                newState.totalTimeScore += 10 - questionTime;

                //Starts the timer
                newState.startTime = action.startTime;

                //Next question in array
                if (action.questionArray.length - 1 >= newState.questionCount) {
                    newState.currentQuestion = action.questionArray[newState.questionCount];
                    newState.questionCount += 1;
                }
                //This happens when game is done
                else {
                  newState.gameHasStarted = false;
                  newState.showPostResult = true;
                  var totalScore = newState.points + newState.totalTimeScore;
                  newState.totalScore = totalScore;
                  newState.questionValue = "Well done! You got " + totalScore + " points!";
                  newState.hasPostedScore = false;
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
            newState.showPostResult = false;

            //Starts the timer
            newState.startTime = action.startTime;
            newState.currentQuestion = action.questionArray[newState.questionCount - 1];
            return newState;

        case 'POST_SCORE':
          //This happens if the score has been posted
          if(newState.hasPostedScore === false){
              newState.showPostResult = false;
              newState.hasPostedScore = true;
          }
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;
