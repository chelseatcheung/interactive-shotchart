var React = require('react');
var $ = require('jquery');
var playerImgs = require('../assets/playerimages.js');


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
  },
  filterQuery: function(blah) {
    console.log('option is ', blah)
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
          <li>
            <img src={playerImgs[this.state.stats1["_id"]]}/>
            <span className="player-name">{this.state.stats1["_id"]}</span>
            <br/>Team: {this.state.stats1["teams"]}
            <br/>{this.state.stats1["score"]}
          </li>
          <li>
            <img src={playerImgs[this.state.stats2["_id"]]}/>
            <span className="player-name">{this.state.stats2["_id"]}</span>
            <br/>Team: {this.state.stats2["teams"]}
            <br/>{this.state.stats2["score"]}
          </li>
          <li>
            <img src={playerImgs[this.state.stats3["_id"]]}/>
            <span className="player-name">{this.state.stats3["_id"]}</span>
            <br/>Team: {this.state.stats3["teams"]}
            <br/>{this.state.stats3["score"]}
          </li>
          <li>
            <img src={playerImgs[this.state.stats4["_id"]]}/>
            <span className="player-name">{this.state.stats4["_id"]}</span>
            <br/>Team: {this.state.stats4["teams"]}
            <br/>{this.state.stats4["score"]}
          </li>
          <li>
            <img src={playerImgs[this.state.stats5["_id"]]}/>
            <span className="player-name">{this.state.stats5["_id"]}</span>
            <br/>Team: {this.state.stats5["teams"]}
            <br/>{this.state.stats5["score"]}
          </li>
        </ul>
        <ul>
          <li>Belts</li>
          <li>Hats & Caps</li>
          <li>Sunglasses</li>
          <li>Scarves</li>
          <li>Scarves</li>
        </ul>
        <ul>
          <li>Casual</li>
          <li>Luxury</li>
          <li>Sport</li>
          <li>Sport</li>
          <li>Sport</li>
        </ul>
        <ul>
          <li>Carry-Ons</li>
          <li>Duffel Bags</li>
          <li>Laptop Bags</li>
          <li>Briefcases</li>
          <li>Briefcases</li>
        </ul>
        <nav>
          <a onClick={this.filterQuery} href="#">{this.state.option1}</a>
          <a onClick={this.filterQuery} href="#">{this.state.option2}</a>
          <a onClick={this.filterQuery} href="#">{this.state.option3}</a>
          <a onClick={this.filterQuery} href="#">{this.state.option4}</a>
        </nav>
      </div>
    </div>
    )
  }
})

module.exports = Slider;