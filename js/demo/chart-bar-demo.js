// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


if ($('#myBarChart').length > 0) {

  var xValues = ["2016", "2017", "2018", "2019", "2020"];
  var yValues = [55, 49, 44, 24, 30];
  //var barColors = ["red", "green", "blue", "orange", "brown"];

  new Chart("myBarChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: '#315E8A', //barColors
        data: yValues,
        gridLines: {
          display: false,
        }
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Past 5 Years"
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          ticks: {
            display: false,
          },
        }]
      },
    }
  });
  new Chart("myBarChart1", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: '#315E8A', //barColors
        data: yValues,
        gridLines: {
          display: false,
        }
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Past 5 Years"
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          ticks: {
            display: false,
          },
        }]
      },
    }
  });
  new Chart("myBarChart2", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: '#315E8A', //barColors
        data: yValues,
        gridLines: {
          display: false,
        }
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Past 5 Years"
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          ticks: {
            display: false,
          },
        }]
      },
    }
  });
  new Chart("myBarChart3", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: '#315E8A', //barColors
        data: yValues,
        gridLines: {
          display: false,
        }
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Past 5 Years"
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          ticks: {
            display: false,
          },
        }]
      },
    }
  });
  new Chart("myBarChart4", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: '#315E8A', //barColors
        data: yValues,
        gridLines: {
          display: false,
        }
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Past 5 Years"
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          ticks: {
            display: false,
          },
        }]
      },
    }
  });
  new Chart("myBarChart5", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: '#315E8A', //barColors
        data: yValues,
        gridLines: {
          display: false,
        }
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Past 5 Years"
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          ticks: {
            display: false,
          },
        }]
      },
    }
  });

}