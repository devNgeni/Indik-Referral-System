import styled from 'styled-components';

export const FailedContainer = styled.div`
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
export const FailedHeader = styled.div`
  font-weight: bold;
  font-family: "Gill Sans", sans-serif;
  font-size: 50px;
  color: #e62524
`;

export const FailedBody = styled.div`
  font-family: "Gill Sans", sans-serif;
`;

export const FailedTitle = styled.div`
  font-family: "Gill Sans", sans-serif;
`;

export const Failedbg = styled.div`
  position: relative;
  text-align-last: center;
  top: 20px;
  z-index: -1;
`;

export const Failedimg = styled.div`
  position: relative;
  text-align-last: center;
  top: -280px;
  z-index: -1;
`;

export const FailedDiv = styled.div`
  height: 340px;
`;

export const FailedTwo = styled.div`
  padding: 23px; 
`;
