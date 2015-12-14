var initialState = require('./../initialstate');
var _ = require('lodash');
var C = require("../constants");
Firebase = require("firebase"),
fb = new Firebase(C.FIREBASE);

var QuizReducer = function (state, action) {
    var newState = Object.assign({}, state);


    switch (action.type) {
        case 'NEXT_QUESTION':
            console.log("Question before if: " + newState.questionCount);
            if (newState.questionArray[newState.questionCount - 1].answerID === action.answer) {
                newState.errorInARow = 0;
                newState.correctInARow +=1;
                //Calculating points
                document.getElementById("message").style.backgroundColor = "green";
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
                    document.getElementById("message").style.backgroundColor = "blue";
                    var totalScore = newState.points + newState.totalTimeScore;
                    newState.totalScore = totalScore;
                    newState.questionValue = "Well done! You got " + totalScore + " points!";
                    document.getElementById("buttonNext").style.visibility = "hidden";
                    document.getElementById("buttonStart").style.visibility = "visible";

                    document.getElementById("postResultButton").style.visibility = "visible";
                    document.getElementById("postResult").style.visibility = "visible";
                }
            }
            else {
                document.getElementById("message").style.backgroundColor = "red";
                newState.points -= 10;
                newState.multiplier = 1;
                newState.questionValue = "Wrong!";

            }
            return newState;
        case 'DO_STUFF':
            newState.points = 0;
            newState.startTime = 0;
            newState.endTime = 0;
            newState.questionCount = 1;
            newState.multiplier = 1;
            newState.totalTimeScore = 0;

            //console.log(document.cookie);
            newState.startTime = new Date().getTime();
            newState.questionArray = _.shuffle(newState.questionArray);
            document.getElementById("buttonStart").style.visibility = "hidden";
            document.getElementById("buttonNext").style.visibility = "visible";
            newState.currentQuestion = newState.questionArray[newState.questionCount - 1];
            return newState;

        case 'COOKIE':
          /*newState.highscoreArray.push({name: 'Micke', score: newState.totalScore});
          console.log(newState.highscoreArray);
          createCookie("highscore", JSON.stringify(newState.highscoreArray), 30);
*/
        case 'POST_SCORE':
        //postScore: function(){
          var myFireRef = new Firebase(C.FIREBASE+"/score");
          fb.push({
            name: document.getElementById("postResult").value,
            score: newState.totalScore
          });

        //}

            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;
