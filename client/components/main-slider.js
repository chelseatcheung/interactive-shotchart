var React = require('react');
var Slider = require('./stats-slider.js');
var SliderTwo = require('./slider-two.js');
var SliderThree = require('./slider-three.js');

var MainSlider = React.createClass({
  getInitialState: function() {
    return {
    viewOne: true,
    viewTwo: false,
    viewThree: false
    }
  },
  render: function() {
    if(this.state.viewOne) {
      return (<div><Slider/></div>)
    } else if (this.state.viewTwo) {
      return (<div><SliderTwo/></div>)
    } else {
      return (<div><SliderThree/></div>)
    }
  }
})

module.exports = MainSlider;