var React = require('react');
var ReactDOM = require('react-dom');
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

ReactDOM.render(<Main/>, document.getElementById('app'));