var initialState = require('./../initialstate');

var DoStuffReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'DO_STUFF':
            var name = document.getElementById("postResult");
            var score = document.getElementById("totalScore").value;
            var highscoreArray = [];

            var object = {name: name, score: score};
            newState.highscoreArray.push(object);
            //console.log(score);
            console.log(newState.highscoreArray);

            return newState;
        case 'DO_MORE_STUFF':
			newState.currentValue = "";
			newState.currentSrcButton1 = "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg";
			newState.currentSrcButton2 = "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg";
			newState.currentSrcButton3 = "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg";
			newState.currentSrcButton4 = "https://secure.royalquiz.com/mq/images/lvvrcfqc.jpg";
            return newState;
		case 'BUTTON1':
			newState.currentSrcButton1 = "http://vignette2.wikia.nocookie.net/spongebob/images/e/e2/Squidward_Design_2.jpg/revision/latest/scale-to-width-down/200?cb=20110911114021&format=webp";
			return newState;
   		case 'BUTTON2':
			newState.currentSrcButton2 = "http://vignette2.wikia.nocookie.net/spongebob/images/e/e2/Squidward_Design_2.jpg/revision/latest/scale-to-width-down/200?cb=20110911114021&format=webp";
			return newState;
		case 'BUTTON3':
			newState.currentSrcButton3 = "http://vignette2.wikia.nocookie.net/spongebob/images/e/e2/Squidward_Design_2.jpg/revision/latest/scale-to-width-down/200?cb=20110911114021&format=webp";
			return newState;
		case 'BUTTON4':
			newState.currentSrcButton4 = "http://vignette2.wikia.nocookie.net/spongebob/images/e/e2/Squidward_Design_2.jpg/revision/latest/scale-to-width-down/200?cb=20110911114021&format=webp";
			return newState;
        default:
            return state || initialState().doStuff;
    }
};

module.exports = DoStuffReducer;
