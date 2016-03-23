var React = require('react');
var $ = require('jquery');
var playerImgs = require('../../assets/playerimages.js');
var FieldGoals = require('../slider-options/fieldgoals.js');
var FreeThrows = require('../slider-options/freethrows.js');
var ThreePoints = require('../slider-options/threepoints.js');
var itemslider = require('../../assets/animation/itemslider.js');

var SliderTwo = React.createClass({
  getInitialState: function() {
    return {
      option1: 'Field Goal %',
      option2: 'Free Throw %',
      option3: 'Three Points %',
      stats1: {},
      stats2: {},
      stats3: {},
      stats4: {},
      stats5: {},
    }
  },
  componentDidMount: function() {
    this.fieldGoal();   
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
      this.fieldGoal();
    } else if (option === this.state.option2) {
      this.freeThrow();
    } else if (option === this.state.option3) {
      this.threePoints();
    }
  },
  fieldGoal: function() {
    $.get('/fieldgoals', function(results) {
      // console.log('results are ', results)
      this.setState({
        stats1: results[0],
        stats2: results[1],
        stats3: results[2],
        stats4: results[3],
        stats5: results[4]
      })
    }.bind(this))
  },
  freeThrow: function() {
    $.get('/freethrows', function(results) {
      // console.log('results are ', results)
      this.setState({
        stats1: results[0],
        stats2: results[1],
        stats3: results[2],
        stats4: results[3],
        stats5: results[4]
      })
    }.bind(this))
  },
  threePoints: function() {
    $.get('/threepoints', function(results) {
      // console.log('results are ', results)
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
        <FieldGoals 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <FreeThrows 
        stats1={this.state.stats1} 
        stats2={this.state.stats2} 
        stats3={this.state.stats3} 
        stats4={this.state.stats4} 
        stats5={this.state.stats5}/>
        <ThreePoints 
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

module.exports = SliderTwo;