import styled from 'styled-components'

export const Container = styled.div`
justify-content: center;
display: grid;
font-size: 1.5em;
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
font-size: 2.5rem;
padding: 20px;
font-family: "Gill Sans", sans-serif;
color: #333;
Text-align-last: center;
`;
export const TextArea = styled.div`
font-family: "Gill Sans", sans-serif;
font-size: 1.5em;
text-align: center;
height: 5em;
margin: 10px;
`;

export const Mobile = styled.div`
margin: 20px;
height: 5rem;
`;
export const Name = styled.div`
height: 5rem;
`;
export const Content = styled.div``;

export const TextBtn = styled.div`
display: flex;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
color: white;
padding: 20px;

button {
        background-color: #00AFF0;
        border-radius: 6px
        color: #ffff;
      }


@media screen and (max-with: 960px) {
  display: flex;
  flex-direction: column-reverse;
}
`;
export const RegisterText = styled.div`
font-family: "Gill Sans", sans-serif;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
`;
export const Registered = styled.div`
margin: 10px;
`;




