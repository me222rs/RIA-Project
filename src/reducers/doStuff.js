var initialState = require('./../initialstate');


var DoStuffReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
      /*case 'GET_SCORES':

        return Object.assign({},state,{
          hasreceiveddata: true,
          data: action.data
        });
*/
        case 'DO_STUFF':
            return newState;
        case 'LISTEN':

          return newState;
        default:
            return state || initialState().doStuff;
    }
};

module.exports = DoStuffReducer;
