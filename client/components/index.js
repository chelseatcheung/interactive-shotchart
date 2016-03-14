var React = require('react');
var ReactDOM = require('react-dom');
var Wheel = require('./wheel.js');
var TopFive = require('./topfive.js');
var Slider = require('./stats-slider.js');

var Main = React.createClass({
  // getInitialState() {
    
  // }
  render: function() {
    return (
      <div className="main-container">
          <Slider/>
      </div>
      )
  }
})
          // <div className="left-container">
          //   <Wheel/>
          // </div>
          // <div className="left-container">
          //   <TopFive/>
          // </div>

ReactDOM.render(<Main/>, document.getElementById('app'));