import { Bar } from "react-chartjs-2";
import styledComponents from "styled-components";

const Wrapper = styledComponents.div`
    width: 100%;
    height: 400px;
    border: 2px solid black;
    border-radius: 10px;
`;
const BarGraph = ({ data }) => {
  return (
    <Wrapper>
      <Bar
        data={data.data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20,
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: true,
                borderDash: [4, 4],
              },
              ticks: {
                stepSize: 5,
              },
              min: 0,
            },
          },
        }}
      />
    </Wrapper>
  );
};

export default BarGraph;
