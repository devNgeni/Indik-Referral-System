import styled from "styled-components";
import { fadeInDown } from "react-animations";

export const WorkContainer = styled.div`
  padding: 20px;
  justify-content: center;
  display: grid;
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  @media screen and (min-width: 960px) {
    justify-content: center;
  }
`;
export const WorkHeader = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 30px;
  justify-content: start;
  display: flex;
`;

export const WorkBody = styled.div`
  font-family: "Gill Sans", sans-serif;
  justify-content: start;
  display: flex;
  text-align: start;
`;

export const WorkText = styled.div`
  font-family: "Gill Sans", sans-serif;
  padding-top: 23px;
  padding-bottom: 2px;
  font-weight: bold;
  justify-content: start;
  text-align: start;
`;

const fadeAnimation = styled.div`
  ${fadeInDown}
`;

export const WorkDiv = styled.div`
  animation: 2s ${fadeAnimation};
  display: column;
`;

export const ServiceTwo = styled.div`
  align-content: center;
  align-items: center;
  justify-content: center;
`;
export const WorkSteps = styled.div`
  display: flex;
  flex-direction: inline-flex;
  align-content: center;
  align-items: center;
  text-align: left;
  justify-content: start;
  font-family: "Gill Sans", sans-serif;
`;

export const WorkRich = styled.div`
  font-family: "Gill Sans", sans-serif;
  color: #00d387;
  font-weight: 900;
  justify-content: center;
  display: flex;
  padding-top: 20px;
`;
export const TableIcon = styled.div`
  display: flex;
  width: 10%;
  text-align-last: start;
  background-color: rgb(0, 175, 240);
  border-radius: 14px;
`;

export const TableSpan = styled.div``;
