var _ = require('lodash');

var questionArray = [{
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
},
{
    question: "Which color is snow?",
    answer: "Yellow",
    options: ["Yellow", "White", "Red"],
    answerID: "A2"
}];

questionArray = _.shuffle(questionArray);

module.exports = questionArray;
