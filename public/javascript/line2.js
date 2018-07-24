var ctx = document.getElementById('lineChart2').getContext('2d');
// GRADIENT VARIABLES
var gradientStroke = ctx.createLinearGradient(0,200,0,0);
gradientStroke.addColorStop(0, 'rgba(179, 227, 243, .1)');
gradientStroke.addColorStop(1, 'rgba(42, 125, 225, .4)');

// GRADIENT VARIABLES END

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ["15 Mar", "30 Mar", "15 Apr", "30 Apr", "15 May", "30 May", "15 Jun","30 Jun", "15 Jul", "30 Jul", "15 Aug", "30 Aug","15 Mar", "30 Mar", "15 Apr", "30 Apr", "15 May", "30 May", "15 Jun","30 Jun"],
    datasets: [
      {
        label: "Total Sales Overview",
        borderColor: ['#007EE5'],
        pointBorderColor: ['#007EE5'],
        pointBackgroundColor: ['#007EE5'],
        pointHoverBackgroundColor: ['#007EE5'],
        pointHoverBorderColor: ['#007EE5'],
        pointBorderWidth: 3,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: true,
        borderWidth: 3,
        data:[229, 260, 330, 440, 501,529, 510, 530, 430, 401,429, 580, 530, 540, 601,529, 510, 530, 540, 601],
        backgroundColor: gradientStroke,
      }
    ]
  },
  // Configuration options go here
  options: {
    elements: {
      line: {
        tension: .3
      }
    },
    maintainAspectRatio: false,
    legend: {
      position: "right"
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function(tooltipItem, data) {
                return ('Total Sales') + ': ' + '$' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            },
        afterLabel: function(tooltipItems, data) {
          var multistringText = [];
          multistringText.push('Total Funded' + ': ' + '$') ;
          multistringText.push('Credit' + ': ' + '$');
          multistringText.push('Remaining Funds' + ': ' + '$');
          return multistringText;
        }
      }
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
          drawTicks: true,
          display: false
        }
      }]
    }
  }
});
