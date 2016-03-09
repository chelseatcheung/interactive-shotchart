var React = require('react');
var ReactDOM = require('react-dom');
var Wheel = require('./wheel.js');
var TopFive = require('./topfive.js');

var Main = React.createClass({
  // getInitialState() {
    
  // }
  render: function() {
    return (
      <div className="main-container">
          <div className="left-container">
            <Wheel/>
          </div>
          <div className="left-container">
            <TopFive/>
          </div>
      </div>
      )
  }
})

ReactDOM.render(<Main/>, document.getElementById('app'));