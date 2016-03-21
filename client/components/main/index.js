var React = require('react');
var ReactDOM = require('react-dom');
var ArrowButtons = require('./arrowbuttons.js');
var MainSlider = require('./main-slider.js');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
      <ArrowButtons/>
      </div>
      )
  }
})

ReactDOM.render(<Main/>, document.getElementById('app'));