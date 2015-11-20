var initialState = require('./../initialstate');

var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'NEXT_QUESTION':

        		var questions = ["Do you like cookies?", "Who is the prime minister of Germany?", "What is the largest?", "What was the answer of the third question?"];
        		var options = ["Yes", "No", "Microwave", "Mickey Mouse", "Angela Merkel", "David Cameron", "Earth", "Jupiter", "Your mom", "This one", "This one", "This one"];
        		var answers = ["A3", "A1", "A2", "A3", "A2"];

            if(answers[newState.answerCount] === action.answer) {
              $("multiplier").animate({
                left: '250px',
                height: '150px',
                width: '150px'
              });
              //Next answer in array
      				newState.answerCount += 1;

              //Calculating points
              newState.points += 10 * newState.multiplier;
              newState.multiplier += 1;

              //Sets the correct variable
      				newState.questionValue = "Correct!";

              //Next question in array
      				newState.question = questions[newState.questionCount];
      				newState.questionCount += 1;

              //Next three answers in array
      				newState.option1 = options[newState.optionCount];
      				newState.optionCount += 1;

      				newState.option2 = options[newState.optionCount];
      				newState.optionCount += 1;

      				newState.option3 = options[newState.optionCount];
      				newState.optionCount += 1;


      			}
      			else{
              newState.points -= 10;
              newState.multiplier = 1;
      				newState.questionValue = "Wrong!";
      			}

            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;
