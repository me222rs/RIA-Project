var initialState = require('./../initialstate');

var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'NEXT_QUESTION':
        		var questions = ["Do you like cookies?", "Who is the prime minister of Germany?"];
        		var options = ["Yes", "No", "Microwave", "Mickey Mouse", "Angela Merkel", "David Cameron"];
        		var answers = ["A3", "A1", "A2"];

      			if(document.getElementById(answers[newState.answerCount]).checked) {
      				newState.answerCount += 1;

              newState.points += 10 * newState.multiplier;
              newState.multiplier += 1;

      				newState.questionValue = "Correct!";
      				//newState.checkedBox = "true";
      				newState.question = questions[newState.questionCount];
      				newState.questionCount += 1;

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
		case 'CHANGE':
			if(document.getElementById('A1').checked) {
				newState.checkedBox = "A1";
				console.log(newState.checkedBox);
			}
			if(document.getElementById('A2').checked) {
				newState.checkedBox = "A2";
				console.log(newState.checkedBox);
			}
			if(document.getElementById('A3').checked) {
				newState.checkedBox = "A3";
				console.log(newState.checkedBox);
			}
			return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;
