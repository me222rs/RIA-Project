var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Hello World!</h2>
                <p>Simple static component with not special content at all.</p>
            </div>
        );
    }
});

module.exports = Home;