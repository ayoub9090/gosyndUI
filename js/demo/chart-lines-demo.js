// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example

if ($("#chartLines").length > 0) {

  var canvas = document.getElementById('chartLines');
  var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };

  var randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  }
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var config = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "TRIFR",
        backgroundColor: '#EF811F',
        borderColor: '#EF811F',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
        fill: false,
      }, {
        label: "LTIFR",
        fill: false,
        backgroundColor: '#06262D',
        borderColor: '#06262D',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'LTFIR and TRIFR'
      },
      tooltips: {
        mode: 'label',
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }],
        yAxes: [{
            id: 'a',
            position: 'left',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'LTIFR'
            }
          },
          {
            id: 'b',
            position: 'right',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TRIFR'
            }
          }
        ]
      }
    }
  };


  var ctx = canvas.getContext("2d");
  window.myLine = new Chart(ctx, config);


}


if ($("#lineChart").length > 0) {

  var canvas = document.getElementById('lineChart');
  var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };

  var randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  }
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var config = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "TRIFR",
        backgroundColor: '#EF811F',
        borderColor: '#EF811F',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
        fill: false,
      }, {
        label: "LTIFR",
        fill: false,
        backgroundColor: '#06262D',
        borderColor: '#F1C518',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
      }]
    },
    options: {
      responsive: true,
      title: {
        display: false,
        text: 'LTFIR and TRIFR'
      },
      legend: {
        display: false
      },
      tooltips: {
        mode: 'label',
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }],
        yAxes: [{
            id: 'a',
            position: 'left',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'LTIFR'
            }
          },
          {
            id: 'b',
            position: 'right',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TRIFR'
            }
          }
        ]
      }
    }
  };


  var ctx = canvas.getContext("2d");
  window.myLine = new Chart(ctx, config);


}