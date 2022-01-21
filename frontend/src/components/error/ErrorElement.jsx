import styled from 'styled-components';

export const ErrorContainer = styled.div`
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
export const ErrorHeader = styled.div`
  font-weight: bold;
  font-family: "Gill Sans", sans-serif;
  font-size: 50px;
  color: #e62524
`;

export const ErrorBody = styled.div`
  font-family: "Gill Sans", sans-serif;
`;

export const ErrorTitle = styled.div`
  font-family: "Gill Sans", sans-serif;
`;

export const Errorbg = styled.div`
  position: relative;
  text-align-last: center;
  top: 20px;
  z-index: -1;
`;

export const Errorimg = styled.div`
  position: relative;
  text-align-last: center;
  top: -280px;
  z-index: -1;
`;

export const ErrorDiv = styled.div`
  height: 340px;
`;

export const ErrorTwo = styled.div`
  padding: 23px; 
`;
