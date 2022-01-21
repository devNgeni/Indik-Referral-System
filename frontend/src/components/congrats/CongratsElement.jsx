import styled from "styled-components";

export const CongratsContainer = styled.div`
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
export const CongratsHeader = styled.div`
  font-weight: bold;
  font-family: "Gill Sans", sans-serif;
  font-size: 50px;
`;

export const CongratsBody = styled.div`
  font-family: "Gill Sans", sans-serif;
`;

export const CongratsTitle = styled.div`
  font-family: "Gill Sans", sans-serif;
`;

export const Congratsbg = styled.div`
  position: relative;
  text-align-last: center;
  top: 20px;
  z-index: -1;
`;

export const Congratsimg = styled.div`
  position: relative;
  text-align-last: center;
  top: -280px;
  z-index: -1;
`;

export const CongratsDiv = styled.div`
  height: 340px;
`;

export const ServiceTwo = styled.div`
  padding: 23px; 
`;
