var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    AudioPlayer = require('./audioPlayer');

var quiz = React.createClass({
    propTypes: {
        doStuff: ptypes.func.isRequired,
        quiz: ptypes.func.isRequired,
        postScore: ptypes.func.isRequired
    },
    getInitialState: function () {
        return {on: false, answer: ''};
    },
    //This triggers an animation when you change your answer
    onOptionChanged: function (e) {
        this.nextAnimation();
        this.setState({answer: e.currentTarget.value});
    },
    //Animation for the Next question button
    nextAnimation: function (e) {
        var el = this.refs.buttonNext;
        if(el) {
          el.className += el.className ? ' on' : ' buttonNext';
        }
        setTimeout(function() {
              el.className = " buttonNext";
        }, 500);
    },
    //Posts the score
    postScore: function(){
        this.props.postScore(this.refs.name.value, this.props.totalScore);
    },
    render: function () {
        var instructionClass = this.state.on ? "on" : "";
        instructionClass += " button";
        var options = this.props.currentQuestion.options;
        var radios = options.map(function (option, index) {
            return (<div>
                        <label>
                            <input
                                type="radio"
                                onClick={this.nextAnimation}
                                checked={this.state.answer === "A" + (index + 1)}
                                onChange={this.onOptionChanged}
                                name="q1" id={'A' + (index + 1)}
                                value={"A" + (index + 1)}/>
                                {option}
                        </label>
                     </div>)
        }.bind(this));
        return (

            <div id="content">
                <span id="timer"></span>
                <AudioPlayer />
                <h2>Quiz</h2>

                <div id="message" className={this.props.correctAnswer ? 'green' : 'red'}>
                    <p>{this.props.questionValue}</p>
                    <input className={this.props.showPostResult ? 'visible' : 'hidden'} id="postResult" type="text" name="name" ref="name"/>
                    <button className={this.props.showPostResult ? 'visible' : 'hidden'} id="postResultButton" onClick={this.postScore}>Post</button>
                </div>

                <div id="multiplierandpoints">
                    <p id="points">Points: {this.props.points}</p>
                    <p id="multiplier">Multiplier x{this.props.multiplier}</p>
                    <p id="timeScore">Time score: {this.props.totalTimeScore}</p>
                    <p value={this.props.totalTimeScore + this.props.points} id="totalScore">Total: {this.props.totalTimeScore + this.props.points}</p>
                </div>
                <div id="options">
                    <p>Question {this.props.questionCount}</p>
                    <button id="buttonStart" onClick={this.props.doStuff} className={this.props.gameHasStarted ? 'hidden' : 'visible'}>New game</button>
                    <p>{this.props.currentQuestion.question}</p>
                        {radios}
                        <button id="buttonNext" ref="buttonNext" className={this.props.gameHasStarted ? ' visible' : ' hidden'} onClick={this.props.quiz.bind(null, this.state.answer)}>Next question
                        </button>
                </div>
            </div>
        );

    }
});


var mapStateToProps = function (state) {
    return state.quiz;
};

var mapDispatchToProps = function (dispatch) {
    return {
        quiz: function (answer) {
            dispatch(actions.quiz(answer));
        },
        doStuff: function () {
            dispatch(actions.doStuff());
        },
        postScore: function (name, score) {
            dispatch(actions.postScore(name, score));
        }

    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);
