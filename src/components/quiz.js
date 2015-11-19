var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        quiz: ptypes.func.isRequired,
		change: ptypes.func.isRequired
    },
    render: function(){

        return (
            <div>
                <h2>Quiz</h2>
                  <h3>Points: {this.props.points}</h3>
                  <h3>Multiplier X{this.props.multiplier}</h3>
				          <p>{this.props.question}</p>

                  <p>{this.props.questionValue}</p>
                      <p>

                					<input type="radio" name="q1" id="A1" value="1"/>{this.props.option1}
                					<input type="radio" name="q1" id="A2" value="2"/>{this.props.option2}
                					<input type="radio" name="q1" id="A3" value="3"/>{this.props.option3}

                          <button onClick={this.props.quiz}>Next</button>
                      </p>
            </div>
        );

    }
});

var mapStateToProps = function(state){
    return state.quiz;
};

var mapDispatchToProps = function(dispatch){
    return {
        quiz: function(){
            dispatch(actions.quiz());
        },
		change: function(){
            dispatch(actions.change());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);
