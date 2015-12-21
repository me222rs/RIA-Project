var initialState = require('./../initialstate');


var HighscoreReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'DO_STUFF':
            return newState;
        case 'LISTEN':
          return newState;
        default:
            return state || initialState().doStuff;
    }
};

module.exports = HighscoreReducer;
