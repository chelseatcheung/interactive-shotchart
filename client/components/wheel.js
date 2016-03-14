var React = require('react');
var ReactDOM = require('react-dom');


var Wheel = React.createClass({
  // getInitialState: function() {
    
  // },
  componentDidMount: function() {

  },
  render: function() {
    return (
      <div id="wheel-container">
        <button onClick={this.highestPoints}>Find Highest Points Per Game</button>
        <div className="main-header">NBA SHOTCHART</div>
      </div>
      )
  }
})

module.exports = Wheel;

