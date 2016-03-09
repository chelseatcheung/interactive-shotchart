var React = require('react');
var ReactDOM = require('react-dom');
var Highcharts = require('highcharts');
var ReactHighcharts = require('react-highcharts');
var $ = require('jquery');

var config = {
  chart: {
            plotBackgroundColor: null,
            // plotBorderWidth: 1,//null,
            plotShadow: false
        },
  title: {
    text: null
  },
  tooltip: {
      enabled: false
  },
  plotOptions: {
      pie: {
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          point:{
            events:{
              click: function(){
                this.moveToPoint(this);
              }
            }
          }
      }
  },
  series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Stats1', 16.6],
                ['Stats2', 16.6],
                ['Stats3', 16.6],
                ['Stats4', 16.6],
                ['Stats5', 16.6],
                ['Stats6', 16.6]
            ]
          }]
    // function(){
    //   var maxPoint = null;
    //   $.each(this.series[0].points, function(i,j){
    //     if (maxPoint === null || j.percentage > maxPoint.percentage){
    //       maxPoint = j;
    //     }
    //   });
    //   this.moveToPoint(maxPoint);
    // }
}



var Wheel = React.createClass({
  // getInitialState: function() {
    
  // },
  componentDidMount: function() {
    // var chart = this.refs.chart.getChart();
    // chart.series[0].addPoint({x:10, y:12});
    var maxPoint = null;
      $.each(this.series[0].points, function(i,j){
        if (maxPoint === null || j.percentage > maxPoint.percentage){
          maxPoint = j;
        }
      });
    this.moveToPoint(maxPoint);
  },
  moveToPoint: function(clickPoint) {
    var points = clickPoint.series.points;
    var startAngle = 0;
    for (var i = 0; i < points.length; i++){
      var p = points[i];
      if (p == clickPoint)
      {
        break;
      }
      startAngle += (p.percentage/100.0 * 360.0);
    }
    clickPoint.series.update({
      //startAngle: -startAngle + 180 // start at 180
      startAngle: -startAngle + 180 - ((clickPoint.percentage/100.0 * 360.0)/2) // center at 180
    });
  },
  render: function() {
    return (
      <div id="wheel-container">
        <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
      </div>
      )
  }
})

module.exports = Wheel;

