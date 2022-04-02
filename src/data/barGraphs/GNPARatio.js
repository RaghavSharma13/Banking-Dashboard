const GNPARatio = {
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
        backgroundColor: "#9cc9e6",
        data: [11, 9, 8, 7.3],
      },
      {
        backgroundColor: "#9cc9e6",
        data: [10.8, 9.2, 8.5, 7.4],
      },
      {
        backgroundColor: "#9cc9e6",
        data: [10.5, 9.1, 7.5, 7.1],
      },
      {
        backgroundColor: "#9cc9e6",
        data: [10.1, 9, 7],
      },
    ],
  },
  title: "Scheduled Commercial Banks GNPA Ratio (%)",
};

export default GNPARatio;
