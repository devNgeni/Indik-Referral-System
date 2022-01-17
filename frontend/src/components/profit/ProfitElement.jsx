import styled from 'styled-components'

export const Container = styled.div`
height: 100%;
width: 100%;
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
font-size: 1.5rem;
font-family: "Gill Sans", sans-serif;
color: #333;

`;

export const TextArea = styled.div`
text-align-last: center;
font-family: "Gill Sans", sans-serif;

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
`;
export const RegisterText = styled.div`
font-family: "Gill Sans", sans-serif;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
`;

export const Navigator = styled.div`
text-align-last: center;
`;