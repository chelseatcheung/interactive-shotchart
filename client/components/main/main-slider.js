var React = require('react');
var SliderOne = require('../sliders/slider-one.js');
var SliderTwo = require('../sliders/slider-two.js');
var SliderThree = require('../sliders/slider-three.js');
var $ = require('jquery');

//toggles the views of the three sliders
var MainSlider = React.createClass({
  render: function() {
    switch (this.props.sliderView) {
      case 'sliderOne':
        return <SliderOne/>
        break;
      case 'sliderTwo':
        return <SliderTwo/>
        break;
      case 'sliderThree':
        return <SliderThree/>
        break;
    }
  }
})

module.exports = MainSlider;