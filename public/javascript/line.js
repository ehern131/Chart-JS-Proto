var ctx = document.getElementById('lineChart').getContext('2d');
// GRADIENT VARIABLES
var gradientStroke1 = ctx.createLinearGradient(0,500,0,0);
gradientStroke1.addColorStop(0, 'rgba(250, 217, 97, 1)');
gradientStroke1.addColorStop(1, 'rgba(247, 107, 28, 1)');

var gradientStroke2 = ctx.createLinearGradient(0,500,0,0);
gradientStroke2.addColorStop(0, 'rgba(179, 227, 243, 1)');
gradientStroke2.addColorStop(1, 'rgba(42, 125, 225, 1)');

var gradientStroke3 = ctx.createLinearGradient(0,500,0,0);
gradientStroke3.addColorStop(0, 'rgba(208, 249, 160, 1)');
gradientStroke3.addColorStop(1, 'rgba(139,195,74,1)');
// GRADIENT VARIABLES END

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ["15 Mar", "30 Mar", "15 Apr", "30 Apr", "15 May", "30 May", "15 Jun","30 Jun", "15 Jul", "30 Jul", "15 Aug", "30 Aug"],
    datasets: [
      {
        label: "Total Applications",
        borderColor: ['#8BC34A'],
        pointBorderColor: gradientStroke3,
        pointBackgroundColor: gradientStroke3,
        pointHoverBackgroundColor: gradientStroke3,
        pointHoverBorderColor: gradientStroke3,
        pointBorderWidth: 3,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: false,
        borderWidth: 3,
        data: [15, 35, 72, 24, 41, 81, 115, 91, 35, 72, 24, 41],
        backgroundColor: ['#8BC34A'],
      },
      {
        label: "Total Approvals",
        borderColor: ['#F5A623'],
        pointBorderColor: gradientStroke1,
        pointBackgroundColor: gradientStroke1,
        pointHoverBackgroundColor: gradientStroke1,
        pointHoverBorderColor: gradientStroke1,
        pointBorderWidth: 3,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: false,
        borderWidth: 3,
        data: [20, 12, 43, 39, 36, 30, 5, 61, 72, 42, 15, 38],
        backgroundColor: ['#F5A623'],
      },
      {
        label: "Total Leases",
        borderColor: ['#007EE5'],
        pointBorderColor: gradientStroke2,
        pointBackgroundColor: gradientStroke2,
        pointHoverBackgroundColor: gradientStroke2,
        pointHoverBorderColor: gradientStroke2,
        pointBorderWidth: 3,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: false,
        borderWidth: 3,
        data: [0, 43, 84, 42, 65, 60, 75, 65, 60, 89, 30, 50],
        backgroundColor: ['#007EE5'],
      },
    ]
  },
  // Configuration options go here
  options: {
    maintainAspectRatio: false,
    legend: {
      position: "right"
    },
    layout: {
      padding: {
        bottom: 20
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "rgba(0,0,0,0.5)",
          defaultFontFamily: "Proxima Nova",
          fontStyle: "regular",
          beginAtZero: true,
          maxTicksLimit: 0,
          padding: 20
        },
        gridLines: {
          drawTicks: true,
          display: true,
          drawBorder: false
        }

      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 0,
          fontColor: "rgba(0,0,0,0.5)",
          defaultFontFamily: "Proxima Nova",
          fontStyle: "regular",
        },
        gridLines: {
          drawTicks: false,
          display: false
        }
      }]
    }
  }
});
