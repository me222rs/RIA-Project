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
    					 {score.name} <span className="score"> {score.score}</span>
    				</p>
    			);
    		});
    		return(
    			<div id="scoreListDiv">
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

    //var ChatWrapper = React.createClass({
    	getInitialState: function() {
        	return {scores: []};
    	},
    	componentWillMount: function() {
        console.log("körs");
    			fb.limitToLast(20).on("value",
    			function(dataSnapshot) {
    				var getScores = [];
    				dataSnapshot.forEach(function(childSnapshot){
    					var getScore = childSnapshot.val();
    					getScore[".key"] = childSnapshot.key();
    					getScores.push(getScore);
    				}.bind(this));
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
                <h2>Highscore</h2>
                <p>Message: {this.props.currentValue}</p>
                <p>
                    <button onClick={this.props.doStuff}>Hello World!</button>
					          <button onClick={this.props.doMoreStuff}>Reset</button>

                </p>

        				<h2>Testing</h2>
                <button onClick={this.showScores}>Show</button>

                  <div id="scoreWrapper">
                    <div id="ScoreDiv">
                      <Scores scores={this.state.scores}/>
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
