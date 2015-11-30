var initialState = require('./../initialstate');
var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);


    switch(action.type){
        case 'NEXT_QUESTION':
        console.log("Question before if: " + newState.questionCount);
        //console.log("Answer before if: " + newState.answerCount);

            if(newState.questionArray[newState.questionCount - 1].answerID === action.answer){

              //Calculating points
              newState.points += 10 * newState.multiplier;
              newState.multiplier += 1;

              //Sets the correct variable
      				newState.questionValue = "Correct!";

                  //Next question in array
                  console.log("Question: " + newState.questionCount);
                  console.log("Length: " + newState.questionArray.length);
                  if(newState.questionArray.length- 1 >= newState.questionCount){
              				newState.question = newState.questionArray[newState.questionCount].question;

                      newState.optionCount = 0;
                      //Next three answers in array
                      newState.option1 = newState.questionArray[newState.questionCount].options[newState.optionCount];
              				newState.optionCount += 1;

                      newState.option2 = newState.questionArray[newState.questionCount].options[newState.optionCount];
              				newState.optionCount += 1;

                      newState.option3 = newState.questionArray[newState.questionCount].options[newState.optionCount];
              				newState.optionCount += 1;

                      newState.questionCount += 1;
                    }
                    else{
                        newState.questionValue = "Well done! You got " + newState.points + " points";
                        document.getElementById("buttonNext").style.visibility = "hidden";
                        document.getElementById("buttonStart").style.visibility = "hidden";
                    }
      			}
      			else{
              newState.points -= 10;
              newState.multiplier = 1;
      				newState.questionValue = "Wrong!";
      			}
            return newState;
                case 'DO_STUFF':
                newState.questionArray = shuffle(newState.questionArray);
                    document.getElementById("buttonStart").style.visibility = "hidden";
                    document.getElementById("buttonNext").style.visibility = "visible";
                    newState.question = newState.questionArray[newState.questionCount - 1].question;

                    newState.optionCount = 0;
                    //Next three answers in array
                    newState.option1 = newState.questionArray[newState.questionCount - 1].options[newState.optionCount];
                    newState.optionCount += 1;

                    newState.option2 = newState.questionArray[newState.questionCount - 1].options[newState.optionCount];
                    newState.optionCount += 1;

                    newState.option3 = newState.questionArray[newState.questionCount - 1].options[newState.optionCount];
                    newState.optionCount += 1;
                return newState;
        default:
            return state || initialState().quiz;
    }
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



module.exports = QuizReducer;
