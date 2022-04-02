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
        label: "Non Food Credit",
        data: [6, 7, 7.1, 7.3, 7.4],
        backgroundColor: "#eb2a34",
        borderColor: "#eb2a34",
      },
      {
        label: "Agriculture",
        data: [12, 11, 10, 10.2, 10.4],
        backgroundColor: "#ebed87",
        borderColor: "#ebed87",
      },
      {
        label: "Industry",
        data: [1.0, 2.3, 2.5, 4.1, 4],
        backgroundColor: "#323a59",
        borderColor: "#323a59",
      },
      {
        label: "Services",
        data: [3, 3.5, 1, 3.3, 4],
        backgroundColor: "#717dad",
        borderColor: "#717dad",
      },
      {
        label: "Personal Loans",
        data: [11, 12, 11.9, 11.8, 11.5],
        backgroundColor: "#bbc5ed",
        borderColor: "#bbc5ed",
      },
    ],
  },
  title: "Loan growth (YoY) by Sectors (November-2021)",
  stepSize: 5,
  showDataLabels: true,
  showXGridLines: false,
  tickSuffix: "%",
};

export default LGSector;
