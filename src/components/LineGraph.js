import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: 2px solid black;
  border-radius: 10px;
  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}
`;

const LineGraph = ({ data }) => {
  return (
    <Wrapper bgColor={data.chartBgColor}>
      <Line
        data={data.data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 5,
          },
          elements: {
            point: {
              radius: data.pointRadius,
            },
          },
          plugins: {
            ...(data.inChartTitle && {
              title: {
                display: true,
                position: "top",
                align: "start",
                text: data.inChartTitle,
              },
            }),
            legend: {
              display: true,
              position: "top",
              labels: {
                usePointStyle: true,
                pointStyle: data.pointStyle ? data.pointStyle : "circle",
              },
            },
            ...(data.showDataLabels && {
              datalabels: {
                display: true,
                formatter: function (value, ctx) {
                  return `${value}${data.tickSuffix}`;
                },
                anchor: "start",
              },
            }),
          },
          scales: {
            x: {
              grid: {
                display: data.showXGridLines,
                borderDash: [4, 4],
              },
              min: 0,
              offset: true,
            },
            y: {
              grid: {
                display: true,
                borderDash: [4, 4],
              },
              ticks: {
                stepSize: data.stepSize,
                callback: function (value) {
                  return `${value}${data.tickSuffix}`;
                },
              },
            },
          },
        }}
      />
    </Wrapper>
  );
};

export default LineGraph;
