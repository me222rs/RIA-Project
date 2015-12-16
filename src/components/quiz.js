var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        doStuff: ptypes.func.isRequired,
        quiz: ptypes.func.isRequired,
        change: ptypes.func.isRequired,
        cookie: ptypes.func.isRequired,
        postScore: ptypes.func.isRequired
    },
    getInitialState: function () {
        return {on: false, playMusic: true, answer: ''};
    },
    toggleOnOff: function (e) {
        this.setState({on: !this.state.on});
    },
    onOptionChanged: function (e) {
        this.nextAnimation();
        this.setState({answer: e.currentTarget.value});
    },
    onMuteSound: function () {
        //document.getElementById("soundtrack").volume=0.1;
        this.setState({playMusic: !this.state.playMusic});
        console.log(this.state.playMusic);
        document.getElementById("soundtrack").muted = this.state.playMusic;
        //this.setState({mute: !this.state.on});
    },
    nextAnimation: function (e) {
        var el = document.getElementById('buttonNext');
        if(el) {
          el.className += el.className ? ' on' : 'buttonNext';
        }
        setTimeout(function() {
            el.className = "buttonNext";
        }, 1000);
    },
    postScore: function(){
        //console.log(this.refs.name.value);
        this.props.postScore(this.refs.name.value);
    },
    render: function () {
        var muteText = this.state.playMusic ? "Mute" : "Play";
        var instructionClass = this.state.on ? "on" : "";
        instructionClass += " button";
        //<div className={className} onClick={this.toggleOnOff}>{text}</div>
        var options = this.props.currentQuestion.options;
        var radios = options.map(function (option, index) {
            return (<div><input type="radio" onClick={this.nextAnimation} checked={this.state.answer === "A" + (index + 1)}
                                 onChange={this.onOptionChanged} name="q1" id={"A" + (index + 1)}
                                 value={"A" + (index + 1)}/> {option}</div>)
        }.bind(this));
        return (

            <div id="content">
                <span id="timer"></span>
                <audio autoPlay={this.state.playMusic} id="soundtrack" muted={this.state.playMusic}>
                    <source src="Sound/theme.mp3" type="audio/mpeg"/>
                </audio>
                <button id="muteSoundButton" onClick={this.onMuteSound}>{muteText}</button>
                <h2>Quiz</h2>

                <div id="message">
                    <p>{this.props.questionValue}</p>
                    <input id="postResult" type="text" name="name" ref="name"/>
                    <button id="postResultButton" onClick={this.postScore}>Post</button>
                </div>

                <div id="multiplierandpoints">
                    <p id="points">Points: {this.props.points}</p>
                    <p id="multiplier">Multiplier x{this.props.multiplier}</p>
                    <p id="timeScore">Time score: {this.props.totalTimeScore}</p>
                    <p value={this.props.totalTimeScore + this.props.points} id="totalScore">Total: {this.props.totalTimeScore + this.props.points}</p>
                </div>



                <div id="options">
                    <button id="buttonStart" onClick={this.props.doStuff}>Start</button>
                    <p>{this.props.currentQuestion.question}</p>
                        {radios}
                        <button id="buttonNext" onClick={this.props.quiz.bind(null, this.state.answer)}>Next question
                        </button>
                </div>
            </div>
        );

    }
});
//React.render(document.getElementById("switch"));

var mapStateToProps = function (state) {
    return state.quiz;
};

var mapDispatchToProps = function (dispatch) {
    return {
        quiz: function (answer) {
            dispatch(actions.quiz(answer));
        },
        change: function () {
            dispatch(actions.change());
        },
        doStuff: function () {
            dispatch(actions.doStuff());
        },
        cookie: function () {
            dispatch(actions.cookie());
        },
        postScore: function (name) {
            dispatch(actions.postScore(name));
        }

    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);
