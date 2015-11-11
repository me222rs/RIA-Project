var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var doStuff = React.createClass({
    propTypes: {
        doStuff: ptypes.func.isRequired,
		doMoreStuff: ptypes.func.isRequired,
		button1: ptypes.func.isRequired,
		button2: ptypes.func.isRequired,
		button3: ptypes.func.isRequired,
		button4: ptypes.func.isRequired
    },
    render: function(){
        return (
            <div>
                <h2>Do stuff</h2>
                <p>Message: {this.props.currentValue}</p>
                <p>
                    <button onClick={this.props.doStuff}>Hello World!</button>
					<button onClick={this.props.doMoreStuff}>Reset</button>
					
                </p>
				
				<h2>Testing</h2>
				<input type="image" src={this.props.currentSrcButton1} id="button1" alt="Submit" width="48" height="48" onClick={this.props.button1} />
				<input type="image" src={this.props.currentSrcButton2} id="button2" alt="Submit" width="48" height="48" onClick={this.props.button2} />
				<input type="image" src={this.props.currentSrcButton3} id="button3" alt="Submit" width="48" height="48" onClick={this.props.button3} />
				<input type="image" src={this.props.currentSrcButton4} id="button4" alt="Submit" width="48" height="48" onClick={this.props.button4} />
            </div>
        );
    }
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