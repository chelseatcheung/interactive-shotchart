var React = require('react');
var $ = require('jquery');


var Slider = React.createClass({
  getInitialState: function() {
    return {
      // animEndEventName: animEndEventNames[Modernizr.prefixed('animation')],
      isAnimating: false,
      option1: 'Points \nPer Game',
      option2: 'Rebounds Per Game',
      option3: 'Assists Per Game',
      option4: 'Steals Per Game',
      stats1: [],
      stats2: [],
      stats3: [],
      stats4: [],
      stats5: []
    }
  },
  componentDidMount: function() {
    this.highestPoints();    
    },
  initEvents: function() {
    console.log('in initEvents');
  },
  highestPoints: function() {
    // var info;
    $.get('/highestpoints', function(results) {
      console.log('results are ', results)
      this.setState({
        stats1: [results[0]['_id'], results[0]['average_points'], results[0]['teams'][0]],
        stats2: [results[1]['_id'], results[1]['average_points'], results[1]['teams'][1]],
        stats3: [results[2]['_id'], results[2]['average_points'], results[2]['teams'][2]],
        stats4: [results[3]['_id'], results[3]['average_points'], results[3]['teams'][3]],
        stats5: [results[4]['_id'], results[4]['average_points'], results[4]['teams'][4]],
      })
    }.bind(this))
  },
  highestRebounds: function() {
    $.get('/highestrebounds', function(results) {
      console.log('rebound results are ', results)
    })
  },
  highestAssists: function() {
      $.get('/highestassists', function(results) {
      console.log('assist results are ', results)
    })
  },
  highestSteals: function() {
    $.get('/higheststeals', function(results) {
    console.log('steal results are ', results)
  })
  },
  render: function() {
    return (
    <div>
      <button onClick={this.highestPoints}>Highest Points Per Game</button>
      <button onClick={this.highestRebounds}>Highest Rebounds Per Game</button>
      <button onClick={this.highestAssists}>Highest Assists Per Game</button>
      <button onClick={this.highestSteals}>Highest Steals Per Game</button>
      <div id="mi-slider" className="mi-slider">
        <ul>
          <li><h4>{this.state.stats1[0]}</h4></li>
          <li><h4>{this.state.stats2[0]}</h4></li>
          <li><h4>{this.state.stats3[0]}</h4></li>
          <li><h4>{this.state.stats4[0]}</h4></li>
          <li><h4>{this.state.stats5[0]}</h4></li>
        </ul>
        <ul>
          <li><h4>Belts</h4></li>
          <li><h4>Hats & Caps</h4></li>
          <li><h4>Sunglasses</h4></li>
          <li><h4>Scarves</h4></li>
          <li><h4>Scarves</h4></li>
        </ul>
        <ul>
          <li><h4>Casual</h4></li>
          <li><h4>Luxury</h4></li>
          <li><h4>Sport</h4></li>
          <li><h4>Sport</h4></li>
        </ul>
        <ul>
          <li><h4>Carry-Ons</h4></li>
          <li><h4>Duffel Bags</h4></li>
          <li><h4>Laptop Bags</h4></li>
          <li><h4>Briefcases</h4></li>
          <li><h4>Briefcases</h4></li>
        </ul>
        <nav>
          <a href="#">{this.state.option1}</a>
          <a href="#">{this.state.option2}</a>
          <a href="#">{this.state.option3}</a>
          <a href="#">{this.state.option4}</a>
        </nav>
      </div>
    </div>
    )
  }
})

module.exports = Slider;