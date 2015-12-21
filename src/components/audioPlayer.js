var React = require('react'),
    AudioPlayer = React.createClass({
    
    getInitialState: function(){
        return {
            playMusic: true
        };
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

    render: function(){
        var muteText = this.state.playMusic ? "Play music" : "Mute";
        
        return (<div>
                    <audio ref="soundtrack" id="soundtrack" muted={this.state.playMusic}>
                        <source src="Sound/theme.mp3" type="audio/mpeg"/>
                    </audio>
                    <button id="muteSoundButton" onClick={this.onMuteSound}>{muteText}</button>
                </div>
        );
    }
});

module.exports = AudioPlayer;