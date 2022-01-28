import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 960px) {
    align-content: center;
    justify-content: center;
  }
`;
export const Circle = styled.div`
  height: 340px;
`;

export const CircleUnder = styled.div`
  position: relative;
  text-align-last: center;
  top: 20px;
  z-index: -1;
`;
export const CircleOver = styled.div`
  position: relative;
  text-align-last: center;
  top: -200px;
  z-index: -1;
`;
export const TextHeader = styled.div`
  text-align-last: center;
  justify-content: center;
  padding: 10px;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "Gill Sans", sans-serif;
  color: #333;
`;

export const TextArea = styled.div`
  text-align-last: center;
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5rem;
  padding: 20px;
  text-align-last: center;
`;

export const TextBtn = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  color: white;
  padding: 20px;

  button:hover {
    border: 2px #00aff0 solid;
  }

  @media screen and (max-with: 960px) {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    justify-content: center;
    text-decoration: none !important;
  }
`;

export const Registered = styled.div``;
export const RegisterText = styled.div`
  font-family: "Gill Sans", sans-serif;
  text-align: center;
  justify-content: center;
  font-size: 1.5em;
`;

export const Navigator = styled.div`
  text-align-last: center;
  padding-left: 100px;
`;
