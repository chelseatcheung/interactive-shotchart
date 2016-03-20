var React = require('react');
var Slider = require('./stats-slider.js');
var SliderTwo = require('./slider-two.js');
var SliderThree = require('./slider-three.js');
var $ = require('jquery');

var MainSlider = React.createClass({
  // getInitialState: function() {
  //   return {
  //   sliderView: this.props.sliderView
  //   }
  // },
  render: function() {
    switch (this.props.sliderView) {
      case 'sliderOne':
        return <Slider/>
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

    // if(this.state.viewOne) {
    //   return (<div><Slider/></div>)
    // } else if (this.state.viewTwo) {
    //   return (<div><SliderTwo/></div>)
    // } else {
    //   return (<div><SliderThree/></div>)
    // }
module.exports = MainSlider;