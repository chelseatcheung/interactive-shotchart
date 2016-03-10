var React = require('react');
var ReactDOM = require('react-dom');


var TopFive = React.createClass({
  // getInitialState() {
    
  // }
  render: function() {
    return (
      <div id="topfive-container">
        <select className="stats-dropdown" name="Seasons">
          <option value="season1">2006-2007</option>
          <option value="season2">2007-2008</option>
          <option value="season3">2008-2009</option>
          <option value="season4">2009-2010</option>
        </select>
        <select className="stats-dropdown" name="Player">
          <option value="player">player</option>
          <option value="team">team</option>
        </select>
      </div>
      )
  }
})

module.exports = TopFive;