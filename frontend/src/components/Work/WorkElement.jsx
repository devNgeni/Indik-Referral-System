import styled from "styled-components";
import { fadeInDown } from "react-animations";

export const WorkContainer = styled.div`
  padding-top: 40px;
  justify-content: center;
  display: grid;
  border-radius: 14px;
  width: 500px;
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
  font-size: 3em;
  font-weight: bold;
  justify-content: center;
  display: flex;
`;

export const WorkBody = styled.div`
  font-family: "Gill Sans", sans-serif;
  justify-content: start;
  display: flex;
  padding: 15px;
  height: 5em;
  text-align: start;
  font-size: 1.5em;
`;

export const WorkText = styled.div`
  font-family: "Gill Sans", sans-serif;
  padding-top: 23px;
  padding-bottom: 10px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  font-size: 1.7em;
`;

const fadeAnimation = styled.div`
  ${fadeInDown}
`;

export const WorkDiv = styled.div`
  animation: 2s ${fadeAnimation};
  display: column;
  padding: 10px;
`;

export const ServiceTwo = styled.div`
  align-content: center;
  align-items: center;
  justify-content: center;
`;
export const WorkSteps = styled.div`
  display: inline-flex;
  font-size: 1.5em;
  text-align: left;
  justify-content: center;
  font-family: "Gill Sans", sans-serif;
`;
export const WorkSpan = styled.div`
  padding: 10px;
`;
export const WorkImg = styled.div`
padding: 10px`;
export const WorkRich = styled.div`
  font-family: "Gill Sans", sans-serif;
  color: #00d387;
  font-weight: 900;
  justify-content: center;
  display: flex;
  padding-top: 20px;
 
`;
export const TableIcon = styled.div`
  box-shadow: 5px 10px 18px #888888;
  max-width: 455px;
  height: 42em;
  justify-content: center;
  border-radius: 14px;
`;

export const TableSpan = styled.div`
width: 100%;
justify-content: center;
display: flex;
`;
