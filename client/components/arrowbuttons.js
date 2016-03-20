var React = require('react');
var MainSlider = require('./main-slider.js');
// var views = [view1, view2, view3]


var ArrowButtons = React.createClass({
  getInitialState: function() {
    return {
      sliderView: 'sliderOne'
    }
  },
  componentDidMount: function() {
    window.localStorage.setItem('sliderview', 0);
  },
  changeRight: function() {
    var views = ['sliderOne', 'sliderTwo' , 'sliderThree'];
    var oldStorage = localStorage.getItem('sliderview');

    if(oldStorage < '2') {
      localStorage.setItem('sliderview',parseInt(localStorage.getItem('sliderview'))+1);
    } else if (oldStorage === '2') {
      localStorage.setItem('sliderview', 0)
    }

    var newStorage = localStorage.getItem('sliderview');

    this.setState({
      sliderView: views[newStorage]
    })
  },
  changeLeft: function() {
    var views = ['sliderOne', 'sliderTwo' , 'sliderThree'];
    var oldStorage = localStorage.getItem('sliderview');

    if(oldStorage > '0') {
      localStorage.setItem('sliderview',parseInt(localStorage.getItem('sliderview'))-1);
    } else if (oldStorage === '0') {
      localStorage.setItem('sliderview', 2)
    }

    var newStorage = localStorage.getItem('sliderview');

    this.setState({
      sliderView: views[newStorage]
    })
  },
  render: function() {
    return (
      <div>
      <i onClick={this.changeLeft} className="fa fa-arrow-circle-left fa-4x"></i>
      <i onClick={this.changeRight} className="fa fa-arrow-circle-right fa-4x"></i>
      <MainSlider sliderView={this.state.sliderView}/>
      </div>
    )
  }
})

module.exports = ArrowButtons;