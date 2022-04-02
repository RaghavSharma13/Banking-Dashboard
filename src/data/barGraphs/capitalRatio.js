const CapitalRatioData = {
  type: "bar",
  data: {
    labels: [
      ["Quaterly", "2018"],
      ["Quaterly", "2019"],
      ["Quaterly", "2020"],
      ["Quaterly", "2021"],
    ],
    datasets: [
      {
        backgroundColor: "#f7c8f6",
        data: [12, 12.5, 12.6, 13.2],
      },
      {
        backgroundColor: "#f7c8f6",
        data: [11.8, 12.3, 12.7, 13.5],
      },
      {
        backgroundColor: "#f7c8f6",
        data: [11.8, 12.8, 13, 13.8],
      },
      {
        backgroundColor: "#f7c8f6",
        data: [12.1, 12.7, 13],
      },
    ],
  },
  title: "Scheduled Commercial Banks Tier I Capital Ratio (%)",
};

export default CapitalRatioData;
