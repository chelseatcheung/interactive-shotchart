var React = require('react');
// var views = [view1, view2, view3]


var ArrowButtons = React.createClass({
  componentDidMount: function() {
    window.localStorage.setItem('sliderview', 0);
  },
  changeViews: function() {
    var storage = localStorage.getItem('sliderview');
    if(storage < '2') {
      localStorage.setItem('sliderview',parseInt(localStorage.getItem('sliderview'))+1);
    } else if (storage === '3') {
      localStorage.setItem('sliderview', 0)
    }
  },
  render: function() {
    return (
      <div>
      <i onClick={this.changeViews} className="fa fa-arrow-circle-left fa-4x"></i>
      <i onClick={this.changeViews} className="fa fa-arrow-circle-right fa-4x"></i>
      </div>
    )
  }
})

module.exports = ArrowButtons;