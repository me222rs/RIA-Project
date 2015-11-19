var React = require('react'),
    Link = require('react-router').Link;

var Nav = React.createClass({
    render: function(){
        return (
            <div id="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
          					<li><Link to="/dostuff">Do stuff</Link></li>
          					<li><Link to="/quiz">Quiz</Link></li>
                </ul>
                <div className="clear"/>
            </div>
        );
    }
});

module.exports = Nav;
