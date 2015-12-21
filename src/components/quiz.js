var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        doStuff: ptypes.func.isRequired,
        quiz: ptypes.func.isRequired,
        postScore: ptypes.func.isRequired
    },
    getInitialState: function () {
        return {on: false, playMusic: true, answer: ''};
    },
    onOptionChanged: function (e) {
        this.nextAnimation();
        this.setState({answer: e.currentTarget.value});
    },
    onMuteSound: function () {
        this.setState({playMusic: !this.state.playMusic});
        if(this.state.playMusic){
          this.refs.soundtrack.volume = 0.1;
          this.refs.soundtrack.play();
        }
        console.log(this.state.playMusic);
        this.refs.soundtrack.muted = this.state.playMusic;
    },
    nextAnimation: function (e) {
        var el = this.refs.buttonNext;
        if(el) {
          el.className += el.className ? ' on' : ' buttonNext';
        }
        setTimeout(function() {
            el.className = " buttonNext";
        }, 1000);
    },
    postScore: function(){
        this.props.postScore(this.refs.name.value);
    },
    render: function () {
        var muteText = this.state.playMusic ? "Play music" : "Mute";
        var instructionClass = this.state.on ? "on" : "";
        instructionClass += " button";
        var options = this.props.currentQuestion.options;
        var radios = options.map(function (option, index) {
            return (<div><input type="radio" onClick={this.nextAnimation} checked={this.state.answer === "A" + (index + 1)}
                                 onChange={this.onOptionChanged} name="q1" id={"A" + (index + 1)}
                                 value={"A" + (index + 1)}/> {option}</div>)
        }.bind(this));
        return (

            <div id="content">
                <span id="timer"></span>
                <audio ref="soundtrack" id="soundtrack" muted={this.state.playMusic}>
                    <source src="Sound/theme.mp3" type="audio/mpeg"/>
                </audio>
                <button id="muteSoundButton" onClick={this.onMuteSound}>{muteText}</button>
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
                    <button id="buttonStart" onClick={this.props.doStuff} className={this.props.gameHasStarted ? 'hidden' : 'visible'}>Start</button>
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
        postScore: function (name) {
            dispatch(actions.postScore(name));
        }

    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);
