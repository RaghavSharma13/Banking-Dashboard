import React from "react";
import styled from "styled-components";
import GraphCmp from "./components/GraphCmp";
import CapitalRatioData from "./data/barGraphs/capitalRatio";
import GNPARatioData from "./data/barGraphs/GNPARatio";
import StressedAssetRatioData from "./data/barGraphs/stressedAssetsRatio";
import LGBankCatData from "./data/lineGraphs/LGBankCat";
import DepositGrowthData from "./data/lineGraphs/DepositGrowth";
import LGSectorData from "./data/lineGraphs/LGSector";
import LGSubSectorData from "./data/lineGraphs/LGSubSector";
import AverageLendingData from "./data/lineGraphs/AverageLending";
import CompositionLoansData from "./data/donutGraphs/CompositionLoans";
import CompositionDepositsData from "./data/donutGraphs/CompositionDeposits";
import CommercialBankDLData from "./data/lineGraphs/CommercialBanks";
import ContentBoxCmp from "./components/ContentBoxCmp";

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  /* grid-auto-rows: 500px; */
  grid-auto-flow: dense;
  gap: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AppTitle = styled.h2`
  text-align: center;
  background-color: lightgray;
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <AppTitle>Banking Dashboard</AppTitle>
      <DashboardWrapper>
        {/* <ContentBoxCmp /> */}
        <GraphCmp data={CompositionLoansData}>
          <ContentBoxCmp />
        </GraphCmp>
        <GraphCmp data={CommercialBankDLData} span={2} />

        {/* line graphs */}
        <GraphCmp data={LGBankCatData} />
        <GraphCmp data={CompositionDepositsData} />
        <GraphCmp data={DepositGrowthData} />
        <GraphCmp data={LGSectorData} />
        <GraphCmp data={LGSubSectorData} />
        <GraphCmp data={AverageLendingData} />

        {/* bar graphs */}
        <GraphCmp data={CapitalRatioData} />
        <GraphCmp data={GNPARatioData} />
        <GraphCmp data={StressedAssetRatioData} />
      </DashboardWrapper>
    </Wrapper>
  );
};

export default App;
