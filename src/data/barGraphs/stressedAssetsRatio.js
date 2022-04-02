const SARatio = {
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
        backgroundColor: "#edd2b7",
        data: [11, 9.5, 9, 8.4],
      },
      {
        backgroundColor: "#edd2b7",
        data: [10.8, 9.6, 8.8, 8.6],
      },
      {
        backgroundColor: "#edd2b7",
        data: [10.5, 9.5, 8.5, 8.7],
      },
      {
        backgroundColor: "#edd2b7",
        data: [10.3, 9.4, 8.2],
      },
    ],
  },
  title: "Scheduled Commercial Banks Stressed Assets Ratio (%)",
};

export default SARatio;
