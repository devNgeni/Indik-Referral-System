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

@media screen and (min-width: 720px) {
  justify-content: center;
}

@media screen and (min-width: 480px) {
  justify-content: center;
}

`;
export const FailedHeader = styled.div`
  font-weight: bold;
  font-family: "Gill Sans", sans-serif;
  font-size: 4em;
  color: #e62524;
  justify-content: center;
  text-align-last: center;
  padding: 20px;
`;

export const FailedBody = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.2rem;
  padding: 20px;
  justify-content: center;
  text-align-last: center;
`;

export const FailedTitle = styled.div`
  font-family: "Gill Sans", sans-serif;
  justify-content: center;
`;


export const Failedbg = styled.div`
  position: relative;
  text-align-last: center;
  top: 20px;
  z-index: -1;
  padding: 40px;
  `;

export const Failedimg = styled.div`
  position: relative;
  text-align-last: center;
  top: -280px;
  z-index: -1;
  padding-bottom: 40px;
`;

export const FailedDiv = styled.div`
  justify-content: center;
  height: 340px;
`;

export const FailedTwo = styled.div`
  padding: 23px;
  text-align-last: center;
  button {
    justify-content: center;
  }
`;
