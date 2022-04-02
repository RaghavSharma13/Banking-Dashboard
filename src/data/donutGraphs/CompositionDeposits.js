const Deposits = {
  type: "doughnut",
  data: {
    labels: ["PSU Banks", "Pvt Banks", "Foreign Banks", "RRBs", "SFBs"],
    datasets: [
      {
        data: [61, 31, 5, 3],
        backgroundColor: [
          "#1151d1",
          "#4372d1",
          "#41b5f0",
          "#819cd4",
          "#a5b4d4",
        ],
      },
    ],
  },
  title: "Composition of Bank Loans (September-2021)",
  tickSuffix: "%",
};

export default Deposits;
