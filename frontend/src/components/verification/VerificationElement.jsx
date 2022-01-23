import styled from 'styled-components'

export const Container = styled.div`
margin: 10px;
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
export const Header = styled.div`
font-weight: bold;
  font-size: 1.5rem;
  font-family: "Gill Sans", sans-serif;
  color: #333;
  text-align-last: center;
  margin: 20px;
`;

export const TextArea = styled.div`
font-family: "Gill Sans", sans-serif;
text-align-last: last !important;
`;

export const Counter = styled.div`
font-family: "Gill Sans", sans-serif;
Text-align-last: center;
margin: 20px;
`;

export const Verify = styled.div``;

export const Code = styled.div`
font-family: "Gill Sans", sans-serif;
`;

export const Registered = styled.div``;
export const RegisterText = styled.div`
font-family: "Gill Sans", sans-serif;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
margin: 10px;
`;

