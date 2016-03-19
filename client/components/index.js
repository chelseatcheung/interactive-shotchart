var React = require('react');
var ReactDOM = require('react-dom');
// var Slider = require('./stats-slider.js');
var ArrowButtons = require('./arrowbuttons.js');
// var SliderTwo = require('./slider-two.js');
// var SliderThree = require('./slider-three.js');
var MainSlider = require('./main-slider.js');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
      <MainSlider/> 
      <ArrowButtons/>
      </div>
      )
  }
})

ReactDOM.render(<Main/>, document.getElementById('app'));