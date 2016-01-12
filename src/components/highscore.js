var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');
    var C = require("../constants");
    Firebase = require("firebase"),
    fb = new Firebase(C.FIREBASE);
    var _ = require('lodash');

    var Scores = React.createClass({
    	render: function(){
    		var score = this.props.scores.map(function(score, index){
    			return(
    				<p key={index}>
    					 <span className="score">{score.name} {score.score}</span>
    				</p>
    			);
    		});
    		return(
    			<div id="score">
    				{score}
    			</div>
    		);
    	}
    });

var Highscore = React.createClass({
    propTypes: {
    doStuff: ptypes.func.isRequired
    },
    	getInitialState: function() {
        	return {scores: []};
    	},
      //Gets the highscores
    	componentWillMount: function() {
    			fb.orderByChild("score").on("value",
    			function(snapshot) {
    				var getScores = [];
    				snapshot.forEach(function(childSnapshot){
    					var getScore = childSnapshot.val();
    					getScores.push(getScore);
    				}.bind(this));
            getScores.reverse();
    			this.setState({scores: getScores});

    		}.bind(this));
      	},
    	componentWillUnmount: function() {
       		fb.off();
     	},

    render: function(){
        return (
            <div>
              <div id="content">
                <div id="highscores">
                <h2>Highscores</h2>
                    <div id="ScoreDiv">
                      <Scores scores={this.state.scores}/>
                    </div>
                </div>
              </div>
            </div>
        );
    },
});

var mapStateToProps = function(state){
    return state.doStuff;
};

var mapDispatchToProps = function(dispatch){
    return {
        doStuff: function(){
            dispatch(actions.doStuff());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Highscore);
