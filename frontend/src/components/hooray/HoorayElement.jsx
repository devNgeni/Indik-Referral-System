import styled from "styled-components";

export const HoorayContainer = styled.div`
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
export const HoorayHeader = styled.div`
  font-weight: bold;
  font-family: "Gill Sans", sans-serif;
  font-size: 50px;
  justify-content: center;
  padding: 20px;
  text-align-last: center;
`;

export const HoorayBody = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5rem;
`;

export const HoorayTitle = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5rem;
`;

export const Hooraybg = styled.div`
  position: relative;
  text-align-last: center;
  top: 20px;
  z-index: -1;
`;

export const Hoorayimg = styled.div`
  position: relative;
  text-align-last: center;
  top: -280px;
  z-index: -1;
`;

export const HoorayDiv = styled.div`
  height: 340px;
`;

export const ServiceTwo = styled.div`
  padding: 60px;
  justify-content: center;
  text-align-last: center; 
`;
