const LGBankCatData = {
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
        // pointRadius: 0,
      },
      {
        label: "Private Banks",
        data: [6.5, 6.1, 7, 10.5],
        backgroundColor: "#717dad",
        borderColor: "#717dad",
        // pointRadius: 0,
      },
      {
        label: "SFBs",
        data: [19.7, 18.5, 19.9, 19.4, 21],
        backgroundColor: "#bbc5ed",
        borderColor: "#bbc5ed",
        // pointRadius: 0,
      },
    ],
  },
  title: "Loan Growth (YoY) by Bank Category",
  stepSize: 10,
  pointRadius: 0,
  showXGridLines: false,
  tickSuffix: "%",
};

export default LGBankCatData;
