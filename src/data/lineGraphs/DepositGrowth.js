const DepositGrowth = {
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
        label: "PSU Banks",
        data: [6, 6.3, 5, 5.1, 5.3],
        backgroundColor: "#323a59",
        borderColor: "#323a59",
      },
      {
        label: "Private Banks",
        data: [6.5, 6.1, 7, 10.5],
        backgroundColor: "#717dad",
        borderColor: "#717dad",
      },
      {
        label: "SFBs",
        data: [19.7, 18.5, 19.9, 19.4, 21],
        backgroundColor: "#bbc5ed",
        borderColor: "#bbc5ed",
      },
    ],
  },
  title: "Deposit Growth (YoY) by Bank Category",
  stepSize: 20,
  showXGridLines: false,
  tickSuffix: "%",
  pointRadius: 0,
};

export default DepositGrowth;
