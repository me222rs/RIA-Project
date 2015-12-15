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

var doStuff = React.createClass({
    propTypes: {
    doStuff: ptypes.func.isRequired,
		doMoreStuff: ptypes.func.isRequired,
		button1: ptypes.func.isRequired,
		button2: ptypes.func.isRequired,
		button3: ptypes.func.isRequired,
		button4: ptypes.func.isRequired
    },

    	getInitialState: function() {
        	return {scores: []};
    	},
    	componentWillMount: function() {
        console.log("körs");
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
        console.log(this.state.scores);

        return (
            <div>
                <h2>Highscores</h2>
                    <div id="ScoreDiv">
                      <Scores scores={this.state.scores}/>
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
        },
		doMoreStuff: function(){
            dispatch(actions.doMoreStuff());
        },
		button1: function(){
            dispatch(actions.button1());
        },
		button2: function(){
            dispatch(actions.button2());
        },
		button3: function(){
            dispatch(actions.button3());
        },
		button4: function(){
            dispatch(actions.button4());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(doStuff);
