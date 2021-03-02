Chart.defaults.global.defaultFontFamily = '"Lato", sans-serif';
Chart.defaults.global.defaultFontStyle = '300';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#ccc';

Chart.defaults.global.elements.line.fill = false;
Chart.defaults.global.elements.line.borderWidth = 1;

Chart.defaults.global.elements.point.hitRadius = 15;

Chart.Legend.prototype.afterFit = function() {
  this.height = this.height + 20;
};

new Chart('chart', {
  type: 'line',

  data: {
    labels: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    datasets:  [{
      label: 'France',
      data: [79218000, 76764000, 76647000, 80499000, 81980000, 83634000, 83701000, 84452000, 82682000, 86861000],
      borderColor: '#808A9F',
      backgroundColor: '#808A9F'
    }, {
      label: 'Spain',
      data: [57192000, 52178000, 52677000, 56177000, 57464000, 60675000, 64939000, 68175000, 75315000, 81786000],
      borderColor: '#F3DE8A',
      backgroundColor: '#F3DE8A'
    }, {
      label: 'United States',
      data: [58007000, 55103000, 60010000, 62821000, 66657000, 69995000, 75022000, 77774000, 76407000, 76941000],
      borderColor: '#E1DEE3',
      backgroundColor: '#E1DEE3'
    }, {
      label: 'China',
      data: [53049000, 50875000, 55664000, 57581000, 57725000, 55686000, 55622000, 56886000, 59270000, 60740000],
      borderColor: '#EB9486',
      backgroundColor: '#EB9486'
    }, {
      label: 'Italy',
      data: [42734000, 43239000, 43626000, 46119000, 46360000, 47704000, 48576000, 50732000, 52372000, 58253000],
      borderColor: '#CAE7B9',
      backgroundColor: '#CAE7B9'
    }]
  },

  options: {
    // scales
    scales: {
      yAxes: [{
        gridLines: {
          color: '#444',
          borderDash: [1, 1],
          zeroLineColor: '#444',
          zeroLineWidth: 2,
          drawBorder: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Number of visitors (millions)',
          fontSize: 18,
          padding: 10
        },
        ticks: {
          beginAtZero: true,
          callback: function(d) {
            return d / 1000000;
          }
        }
      }],
      xAxes: [{
        gridLines: {
        },
        scaleLabel: {
          display: true,
          labelString: 'Month',
          fontSize: 18,
          padding: 10
        }
      }]
    },
    // legend
    legend: {
      labels: {
        padding: 20,
        boxWidth: 14
      }
    },
    // title
    title: {
      display: true,
      text: 'Which are the most visited countries?',
      fontSize: 28,
      fontColor: '#fff',
      fontStyle: '300'
    },
    layout: {
      padding: {
        top: 10
      }
    },
    // tooltip
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var numVisitors = +tooltipItem.value;
          numVisitors /= 1000000;
          return numVisitors.toFixed(1) + ' million visitors';
        }
      }
    },
    // container size
    maintainAspectRatio: false
  }
});