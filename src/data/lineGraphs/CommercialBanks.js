const CommercialBankDLData = {
  type: "line",
  data: {
    labels: ["Oct,2020", "Jan,2021", "Apr,2021", "July,2021", "Oct,2021"],
    datasets: [
      {
        label: "Deposit Growth",
        data: [11.1, 12.0, 11.5, 12.1, 9.7, 10.6, 9.3, 11.4, 10.3],
        backgroundColor: "#323a59",
        borderColor: "#323a59",
      },
      {
        label: "Credit Growth",
        data: [6.1, 5.1, 5.3, 5.1, 6.6, 5.9, 6.6, 5.4, 6.5, 7.4, 9.3],
        backgroundColor: "#717dad",
        borderColor: "#717dad",
      },
    ],
  },
  inChartTitle: "Scheduled Commercial Banks - Deposit and Credit Growth",
  stepSize: 2,
  showXGridLines: true,
  showDataLabels: true,
  tickSuffix: "%",
  pointRadius: 0,
  chartBgColor: "#f7cf92",
};

export default CommercialBankDLData;
