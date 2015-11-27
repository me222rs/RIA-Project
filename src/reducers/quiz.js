var initialState = require('./../initialstate');


var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'NEXT_QUESTION':


        		//var questions = ["Do you like cookies?", "Who is the prime minister of Germany?", "What is the largest?", "What was the answer of the third question?"];
        		//var options = ["Yes", "No", "What is a cookie?", "Barrack Obama", "Angela Merkel", "David Cameron", "Earth", "Jupiter", "Milky way galaxy", "This one", "This one", "This one"];
        		//var answers = ["A3", "A1", "A2", "A3", "A2"];
            var startQuestion = {answerID: "A3"};
            var question1 = { question: "Who is the prime minister in Germany?", answer: "Angela Merkel", options: ["Angela Merkel","Barack Obama", "David Cameron"], answerID: "A1"};
            var question2 =  { question: "Do you like cookies?", answer: "Yes", options: ["Yes","No", "Dont know"], answerID: "A1"};
            var questionArray = [];
            questionArray.push(startQuestion);
            questionArray.push(question1);
            questionArray.push(question2);

            if(questionArray[newState.answerCount].answerID === action.answer){
              //Next answer in array
      				newState.answerCount += 1;

              //Calculating points
              newState.points += 10 * newState.multiplier;
              newState.multiplier += 1;

              //Sets the correct variable
      				newState.questionValue = "Correct!";

                  //Next question in array
                  newState.questionCount += 1;
          				newState.question = questionArray[newState.questionCount].question;

                  newState.optionCount = 0;
                  //Next three answers in array
                  newState.option1 = questionArray[newState.questionCount].options[newState.optionCount];
          				newState.optionCount += 1;

                  newState.option2 = questionArray[newState.questionCount].options[newState.optionCount];
          				newState.optionCount += 1;

                  newState.option3 = questionArray[newState.questionCount].options[newState.optionCount];
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
