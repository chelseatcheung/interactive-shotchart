var React = require('react');
var HighestSteals = require('../slider-options/higheststeals.js');
var HighestBlocks = require('../slider-options/highestblocks.js');
var HighestAssistPoints = require('../slider-options/highestassistpoints.js');
var $ = require('jquery');

//view of slider three, holds content of last three stats
var SliderThree = React.createClass({
  getInitialState: function() {
    return {
      option1: 'Highest Steals',
      option2: 'Highest Blocks',
      option3: 'Highest Assist Points',
      stats1: {},
      stats2: {},
      stats3: {},
      stats4: {},
      stats5: {},
    }
  },
  componentDidMount: function() {
    this.highestSteals();   
    var that = this;
    $('.options').on('click', function() {
      var selection = this.innerHTML;
      that.filterQuery(selection);
    })

    itemSlider( $, window );
    $(function() {
        $( '#mi-slider' ).catslider();
      });
  },
  filterQuery: function(option) {
    if(option === this.state.option1) {
      this.highestSteals();
    } else if (option === this.state.option2) {
      this.highestBlocks();
    } else if (option === this.state.option3) {
      this.highestAssistPoints();
    }
  },
  highestSteals: function() {
    $.get('/higheststeals', function(results) {
      this.setState({
        stats1: results[1],
        stats2: results[2],
        stats3: results[3],
        stats4: results[4],
        stats5: results[5]
      })
    }.bind(this))
  },
  highestBlocks: function() {
    $.get('/highestblocks', function(results) {
      this.setState({
        stats1: results[1],
        stats2: results[2],
        stats3: results[3],
        stats4: results[4],
        stats5: results[5]
      })
    }.bind(this))
  },
  highestAssistPoints: function() {
    $.get('/highestassistpoints', function(results) {
      this.setState({
        stats1: results[1],
        stats2: results[2],
        stats3: results[3],
        stats4: results[4],
        stats5: results[5]
      })
    }.bind(this))
    console.log('in highest assist points');
  },
  render: function() {
    return (
    <div>
      <div id="mi-slider" className="mi-slider">
        <HighestSteals 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <HighestBlocks 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <HighestAssistPoints 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <nav>
          <a className="options" href="#">{this.state.option1}</a>
          <a className="options" href="#">{this.state.option2}</a>
          <a className="options" href="#">{this.state.option3}</a>
        </nav>
      </div>
    </div>
    )
  }
})

module.exports = SliderThree;