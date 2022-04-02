import { Chart as ChartJs, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import BarGraph from "./BarGraph";
import DoughnutGraph from "./DoughnutGraph";
import LineGraph from "./LineGraph";
ChartJs.register(...registerables, ChartDataLabels);
ChartJs.defaults.plugins.datalabels.display = false;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.span &&
    css`
      grid-column: span ${props.span};
    `}
`;

const Title = styled.h3`
  padding: 4px;
  background-color: skyblue;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  margin: 5px 0;
`;

const GraphCmp = ({ data, span, children }) => {
  return (
    <Wrapper span={span}>
      {children}
      {data.title && <Title>{data.title}</Title>}
      {data.type === "bar" ? (
        <BarGraph data={data} />
      ) : data.type === "line" ? (
        <LineGraph data={data} />
      ) : (
        <DoughnutGraph data={data} />
      )}
    </Wrapper>
  );
};

export default GraphCmp;
