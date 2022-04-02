const LGSector = {
  type: "line",
  data: {
    labels: [
      "September,2020",
      "December,2020",
      "March,2020",
      "June,2021",
      "September,2021",
    ],
    datasets: [
      {
        label: "NBFCs",
        data: [1, -3, -2, 1, 5],
        backgroundColor: "#eb2a34",
        borderColor: "#eb2a34",
      },
      {
        label: "Trade",
        data: [7, 7, 4, 7, 9],
        backgroundColor: "#ebed87",
        borderColor: "#ebed87",
      },
      {
        label: "Power",
        data: [0, 3, 4, 6, 5],
        backgroundColor: "#323a59",
        borderColor: "#323a59",
      },
      {
        label: "Textiles",
        data: [26, 29, 30, 31, 32],
        backgroundColor: "#717dad",
        borderColor: "#717dad",
      },
      {
        label: "Metals",
        data: [-14, -15, -16, -16, -17],
        backgroundColor: "#bbc5ed",
        borderColor: "#bbc5ed",
      },
      {
        label: "Roads",
        data: [30, 29, 25, 24, 23],
        backgroundColor: "#d15e11",
        borderColor: "#d15e11",
      },
    ],
  },
  title: "Loan growth (YoY) by Key Sub-sectors (November-2021)",
  stepSize: 10,
  showDataLabels: true,
  showXGridLines: false,
  tickSuffix: "%",
};

export default LGSector;
