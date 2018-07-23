new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Open", "Pending", "Funded", "Void",],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#F5A623", "#007EE5","#8BC34A","#4A4A4A"],
        data: [2478,5267,734,784],
      },
    ]
  },
  options: {
    maintainAspectRatio: false,
    cutoutPercentage: 75,
    legend: {
      position: "right"
    },
    layout: {
      padding: {
        bottom: 20
      },
    },
    title: {
      display: true,
    }
  }
});
