import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid black;
  border-radius: 10px;
`;

const DoughnutGraph = ({ data }) => {
  return (
    <Wrapper>
      <Doughnut
        data={data.data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 10,
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
              },
            },
            datalabels: {
              display: "auto",
              clamp: true,
              formatter: function (value, ctx) {
                return `${ctx.chart.data.labels[ctx.dataIndex]} ${value}${
                  data.tickSuffix
                }`;
              },
              anchor: "end",
            },
          },
        }}
      />
    </Wrapper>
  );
};

export default DoughnutGraph;
