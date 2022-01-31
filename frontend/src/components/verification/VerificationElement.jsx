import styled from 'styled-components'

export const Container = styled.div`
margin: 10px;
justify-content: center;
display: grid !important;
margin: 3% auto;
@media screen and (min-width: 1024px) {
  width: 100%;
  height: 100%;
  justify-content: center;
}
@media screen and (min-width: 960px) {
  justify-content: center;
  text-align-last: center;
}
`;
export const Header = styled.div`
font-weight: bold;
  font-size: 2.5rem;
  font-family: "Gill Sans", sans-serif;
  color: #333;
  text-align-last: center;
  margin: 20px;
`;

export const TextArea = styled.div`
font-family: "Gill Sans", sans-serif;
text-align-last: last;
font-size: 2rem;
padding-bottom:  40px;
padding-left: 20px;
width: 500px;
`;

export const Counter = styled.div`
font-family: "Gill Sans", sans-serif;
Text-align-last: center;
font-size: 2rem;
margin: 20px;
`;

export const Verify = styled.div`
display: inline-flex;
justify-content: center;
padding: 20px;
`;
export const VerifyArea = styled.div`
padding: 2px;
`;
export const Code = styled.div`
font-family: "Gill Sans", sans-serif;
font-size: 2em;
text-align-last: center;
`;
export const VerifyButton = styled.div`
padding-top: 20px;
justify-content: center;
display: flex;
`;
export const Registered = styled.div`
padding: 40px;
text-align-last: center;
font-size: 1.5em;
`;
export const RegisterText = styled.div`
font-family: "Gill Sans", sans-serif;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
margin: 10px;
`;

