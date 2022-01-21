import styled from "styled-components";

export const Container = styled.div`
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
  padding-top: 2px;
  font-weight: bold;
  font-size: 3rem;
  font-family: "Gill Sans", sans-serif;
  color: #333;
  padding: 40px;
`;

export const TextArea = styled.div`
  text-align-last: center;
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5rem;
  padding: 40px;
`;

export const TextBtn = styled.div`
display: flex;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
color: white;

button {
        background-color: #00AFF0;
        border-radius: 6px
        color: #ffff;
      }

      :hover {
        transition: all ease-in-out 0.5s;
        transform: scale(1.2);
      }
@media screen and (max-with: 960px) {
  display: flex;
  flex-direction: column-reverse;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
} 
`;

export const Registered = styled.div`
  display: inline-flex;
  justify-content: center;
  margin: 40px;
  font-size: 1.5rem;
`;
export const RegisterText = styled.div`
  font-family: "Gill Sans", sans-serif;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const RegisterLink = styled.div`
  font-weight: bold;
  padding-left: 15px;
  font-family: "Gill Sans", sans-serif;
  :hover {
    transition: all ease-in-out 0.5s;
    transform: scale(1.2);
  }
`;

export const Navigator = styled.div`
  text-align-last: center;
`;
