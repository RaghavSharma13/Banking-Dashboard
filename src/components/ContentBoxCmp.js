import React from "react";
import styled from "styled-components";

const ContentBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: min-content;
`;

const ContentBox = styled.div`
  padding: 5px;
  background-color: ${(props) => props.bgColor};
  border: 2px solid black;
  border-radius: 4px;
`;

const ContentBoxHeader = styled.h4``;

const ContentBoxDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid gray;
  padding-left: 4px;
`;

const ContentBoxDataTime = styled.h6``;

const ContentBoxDataValue = styled.h4``;

const ContentBoxCmp = () => {
  return (
    <ContentBoxWrapper>
      <ContentBox bgColor="skyBlue">
        <ContentBoxHeader>Non-Food Credit Growth</ContentBoxHeader>
        <ContentBoxDataWrapper>
          <ContentBoxDataTime>31 December 2021</ContentBoxDataTime>
          <ContentBoxDataValue>9.3%</ContentBoxDataValue>
        </ContentBoxDataWrapper>
      </ContentBox>
      <ContentBox bgColor="#f7cf92">
        <ContentBoxHeader>Deposit Growth</ContentBoxHeader>
        <ContentBoxDataWrapper>
          <ContentBoxDataTime>31 December 2021</ContentBoxDataTime>
          <ContentBoxDataValue>10.3%</ContentBoxDataValue>
        </ContentBoxDataWrapper>
      </ContentBox>
    </ContentBoxWrapper>
  );
};

export default ContentBoxCmp;
