// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example

if($("#chart1").length > 0){
var ctx = document.getElementById("chart1");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Male", "FeMale"],
    datasets: [{
      data: [30, 30],
      backgroundColor: ['#F1C518', '#315E8A'],
      //hoverBackgroundColor: ['#2e59d9', '#17a673'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
 
  options: {
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 50,
        bottom:50
      }
    },
    tooltips: {
      display:false,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    plugins: {
      legend: false,
      outlabels: {
          text: '%l',
          color: '#1D222E',
          backgroundColor:'white',
          stretch: 25,
          font: {
              resizable: true,
              minSize: 14,
              maxSize: 18
          }
      }
    },
    cutoutPercentage: 40,
  },
});
}


if($("#chart2").length > 0){
var ctx = document.getElementById("chart2");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Permanent \n Fulltime", "Temporary \n Parttime"],
    datasets: [{
      data: [30, 30],
      backgroundColor: ['#F1C518', '#315E8A'],
      //hoverBackgroundColor: ['#2e59d9', '#17a673'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
 
  options: {
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 50,
        bottom:50
      }
    },
    tooltips: {
      display:false,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    plugins: {
      legend: false,
      outlabels: {
          text: '%l',
          color: '#1D222E',
          padding: {
            top: 10,
            bottom:10
          },
          backgroundColor:'white',
          stretch: 25,
          font: {
              resizable: true,
              minSize: 12,
              maxSize: 18,
          },
      },
   
  
    },
    cutoutPercentage: 40,
  },
});
}

if($("#chart3").length > 0){

var ctx = document.getElementById("chart3");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Sr. Management", "Junior \n Management","Staff"],
    datasets: [{
      data: [30, 30,60],
      backgroundColor: ['#F1C518', '#315E8A','#1D222E'],
      //hoverBackgroundColor: ['#2e59d9', '#17a673'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
 
  options: {
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 50,
        bottom:50
      }
    },
    tooltips: {
      display:false,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
  
    legend: {
      display: false
    },
    plugins: {
      
      legend: false,
      outlabels: {
          text: '%l',
          color: '#1D222E',
            padding: {
              top: 10,
              bottom:10
            },
          backgroundColor:'white',
          stretch: 25,
          font: {
              resizable: true,
              minSize: 12,
              maxSize: 18
          }
      }
    },
    cutoutPercentage: 40,
  },
});

}