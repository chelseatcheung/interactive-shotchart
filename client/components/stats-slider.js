var React = require('react');
var $ = require('jquery');
// var Modernizr = require('modernizr');

  var animEndEventNames = {
    'WebkitAnimation' : 'webkitAnimationEnd',
    'OAnimation' : 'oAnimationEnd',
    'msAnimation' : 'MSAnimationEnd',
    'animation' : 'animationend'
  };

var Slider = React.createClass({
  getInitialState: function() {
    return {
      // animEndEventName: animEndEventNames[Modernizr.prefixed('animation')],
      isAnimating: false
    }
  },
  componentDidMount: function() {
    // var support = Modernizr.csstransforms && Modernizr.cssanimations;
    this.$categories = this.$el.children('ul');
    this.$navcategories = this.$el.fine('nav > a');
    
    },
  initEvents: function() {
    console.log('in initEvents');
  },
  highestPoints: function() {
    $.get('/highestpoints', function(results) {
      console.log('results are ', results)
    })
  },
  highestRebounds: function() {
    $.get('/highestrebounds', function(results) {
      console.log('results are ', results)
    })
  },
  highestAssists: function() {
      $.get('/highestassists', function(results) {
      console.log('results are ', results)
    })
  },
  highestSteals: function() {
    $.get('/higheststeals', function(results) {
    console.log('results are ', results)
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
          <li><a href="#"><img src="" alt="img01"/><h4>Boots</h4></a></li>
          <li><a href="#"><img src="" alt="img02"/><h4>Oxfords</h4></a></li>
          <li><a href="#"><img src="" alt="img03"/><h4>Loafers</h4></a></li>
          <li><a href="#"><img src="" alt="img04"/><h4>Sneakers</h4></a></li>
        </ul>
        <ul>
          <li><a href="#"><img src="" alt="img05"/><h4>Belts</h4></a></li>
          <li><a href="#"><img src="" alt="img06"/><h4>Hats & Caps</h4></a></li>
          <li><a href="#"><img src="" alt="img07"/><h4>Sunglasses</h4></a></li>
          <li><a href="#"><img src="" alt="img08"/><h4>Scarves</h4></a></li>
        </ul>
        <ul>
          <li><a href="#"><img src="" alt="img09"/><h4>Casual</h4></a></li>
          <li><a href="#"><img src="" alt="img10"/><h4>Luxury</h4></a></li>
          <li><a href="#"><img src="" alt="img11"/><h4>Sport</h4></a></li>
        </ul>
        <ul>
          <li><a href="#"><img src="" alt="img12"/><h4>Carry-Ons</h4></a></li>
          <li><a href="#"><img src="" alt="img13"/><h4>Duffel Bags</h4></a></li>
          <li><a href="#"><img src="" alt="img14"/><h4>Laptop Bags</h4></a></li>
          <li><a href="#"><img src="" alt="img15"/><h4>Briefcases</h4></a></li>
        </ul>
        <nav>
          <a href="#">Shoes</a>
          <a href="#">Accessories</a>
          <a href="#">Watches</a>
          <a href="#">Bags</a>
        </nav>
      </div>
    </div>
    )
  }
})

module.exports = Slider;