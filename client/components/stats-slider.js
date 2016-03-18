var React = require('react');
var $ = require('jquery');
var playerImgs = require('../assets/playerimages.js');
var HighestPoints = require('./slider-options/highestpoints.js');
var HighestRebounds = require('./slider-options/highestrebounds.js');
var HighestAssists = require('./slider-options/highestassists.js');
var HighestSteals = require('./slider-options/higheststeals.js');

var Slider = React.createClass({
  getInitialState: function() {
    return {
      option1: 'Points Per Game',
      option2: 'Rebounds Per Game',
      option3: 'Assists Per Game',
      option4: 'Steals Per Game',
      stats1: {},
      stats2: {},
      stats3: {},
      stats4: {},
      stats5: {}
    }
  },
  componentDidMount: function() {
    this.highestPoints();   
    var that = this;
    $('.options').on('click', function() {
      var selection = this.innerHTML;
      that.filterQuery(selection);
    })
  },

  filterQuery: function(option) {
    if(option === this.state.option1) {
      this.highestPoints();
    } else if (option === this.state.option2) {
      this.highestRebounds();
    } else if (option === this.state.option3) {
      this.highestAssists();
    } else if (option === this.state.option4) {
      this.highestSteals();
    }
  },
  highestPoints: function() {
    $.get('/highestpoints', function(results) {
      console.log('results are ', results)
      this.setState({
        stats1: results[0],
        stats2: results[1],
        stats3: results[2],
        stats4: results[3],
        stats5: results[4]
      })
    }.bind(this))
  },
  highestRebounds: function() {
    $.get('/highestrebounds', function(results) {
      console.log('results are ', results)
      this.setState({
        stats1: results[1],
        stats2: results[2],
        stats3: results[3],
        stats4: results[4],
        stats5: results[5]
      })
    }.bind(this))
  },
  highestAssists: function() {
    $.get('/highestassists', function(results) {
      console.log('results are ', results)
      this.setState({
        stats1: results[1],
        stats2: results[2],
        stats3: results[3],
        stats4: results[4],
        stats5: results[5]
      })
    }.bind(this))
  },
  highestSteals: function() {
    $.get('/higheststeals', function(results) {
      console.log('results are ', results)
      this.setState({
        stats1: results[1],
        stats2: results[2],
        stats3: results[3],
        stats4: results[4],
        stats5: results[5]
      })
    }.bind(this))
  },
  render: function() {
    return (
    <div>
      <div id="mi-slider" className="mi-slider">
        <HighestPoints 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <HighestRebounds 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <HighestAssists 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <HighestSteals 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <nav>
          <a className="options" href="#">{this.state.option1}</a>
          <a className="options" href="#">{this.state.option2}</a>
          <a className="options" href="#">{this.state.option3}</a>
          <a className="options" href="#">{this.state.option4}</a>
        </nav>
      </div>
    </div>
    )
  }
})

module.exports = Slider;