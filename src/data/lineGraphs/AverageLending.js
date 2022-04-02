const AverageLending = {
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
        label: "All Loans",
        data: [9.43, 9.23, 9.1, 8.92, 8.93, 8.91],
        backgroundColor: "#eb2a34",
        borderColor: "#eb2a34",
      },
      {
        label: "All Term Deposits",
        data: [5.63, 5.46, 5.29, 5.21, 5.1, 5.04],
        backgroundColor: "#ebed87",
        borderColor: "#ebed87",
      },
      {
        label: "New Loans",
        data: [8.32, 8.02, 8.07, 7.73, 8.05, 7.98],
        backgroundColor: "#323a59",
        borderColor: "#323a59",
      },
    ],
  },
  title: "Average Lending & Deposit Rates of SCBs",
  stepSize: 1,
  showXGridLines: true,
  showDataLabels: true,
  tickSuffix: "",
  pointStyle: "line",
};

export default AverageLending;
