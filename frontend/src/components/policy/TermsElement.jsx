import styled from 'styled-components';

export const TermsContainer = styled.div`
justify-content: center;
display: grid;
height: 100%;
@media screen and (min-width: 1024px) {
  width: 100%;
  height: 100%;
  justify-content: center;
}
@media screen and (min-width: 960px) {
  justify-content: center;

}
`;
export const TermsDiv = styled.div`
height: 100em;
`;
export const TermsText = styled.div``;
export const TermsImage = styled.div`
position: relative;
text-align-last: center;
  top: 20px;
  z-index: -1;
`;
export const TermsBg = styled.div`
height: 340px;
`;
export const TermsIcon = styled.div`
position: relative;
text-align-last: center;
top: -200px;
z-index: -1;
`;
export const TermsList = styled.div`
display: flex;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
color: white;
height: 2em;
padding: 20px;
button {
        background-color: #00AFF0;
        border-radius: 6px
        color: #ffff;
      }`;
export const TermsHeader = styled.div`
display: flex;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
color: white;
height: 4em;
padding: 20px;
margin: 5em;
button {
        background-color: #00AFF0;
        border-radius: 6px
        color: #ffff;
      }
`;