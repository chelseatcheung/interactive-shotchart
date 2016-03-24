var React = require('react');
var MainSlider = require('./main-slider.js');

var numbers = {
  1:'ONE',
  2:'TWO',
  3:'THREE'
}

var ArrowButtons = React.createClass({
  getInitialState: function() {
    return {
      sliderView: 'sliderOne',
      pageNumber:'ONE'
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
    var page = parseInt(newStorage) + 1
    this.setState({
      sliderView: views[newStorage],
      pageNumber: numbers[page]
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
    var page = parseInt(newStorage) + 1
    this.setState({
      sliderView: views[newStorage],
      pageNumber: numbers[page]
    })
  },
  render: function() {
    return (
      <div>
        <div className="col-md-1">
          <i onClick={this.changeLeft} className="fa fa-arrow-circle-left fa-5x"></i>
        </div>
        <div className="col-md-10">
          <MainSlider sliderView={this.state.sliderView}/>
        </div>
        <div className="col-md-1">
          <i onClick={this.changeRight} className="fa fa-arrow-circle-right fa-5x"></i>
        </div>
        <div className="page">-PAGE {this.state.pageNumber}-</div>
      </div>
    )
  }
})

module.exports = ArrowButtons;