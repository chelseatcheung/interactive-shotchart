var React = require('react');
var playerImgs = require('../../assets/playerimages.js');

var HighestAssists = React.createClass({
  render: function() {
    return (
        <ul>
          <li>
            <img src={playerImgs[this.props.stats1["_id"]]}/>
            <span className="player-name">{this.props.stats1["_id"]}</span>
            <br/>Team: {this.props.stats1["teams"]}
            <br/>{this.props.stats1["score"]}
          </li>
          <li>
            <img src={playerImgs[this.props.stats2["_id"]]}/>
            <span className="player-name">{this.props.stats2["_id"]}</span>
            <br/>Team: {this.props.stats2["teams"]}
            <br/>{this.props.stats2["score"]}
          </li>
          <li>
            <img src={playerImgs[this.props.stats3["_id"]]}/>
            <span className="player-name">{this.props.stats3["_id"]}</span>
            <br/>Team: {this.props.stats3["teams"]}
            <br/>{this.props.stats3["score"]}
          </li>
          <li>
            <img src={playerImgs[this.props.stats4["_id"]]}/>
            <span className="player-name">{this.props.stats4["_id"]}</span>
            <br/>Team: {this.props.stats4["teams"]}
            <br/>{this.props.stats4["score"]}
          </li>
          <li>
            <img src={playerImgs[this.props.stats5["_id"]]}/>
            <span className="player-name">{this.props.stats5["_id"]}</span>
            <br/>Team: {this.props.stats5["teams"]}
            <br/>{this.props.stats5["score"]}
          </li>
        </ul>
    )
  }
})

module.exports = HighestAssists;