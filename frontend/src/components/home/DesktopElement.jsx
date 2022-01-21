import styled from 'styled-components'
export const DeskContainer = styled.div`
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
export const DeskHeader = styled.div`
font-family: "Gill Sans", sans-serif;
font-weight: bold;
font-size: 50px;
`;
export const DeskDiv = styled.div`
position: relative;
top: -30px;
Left: -160px;
text-align-last: right;
button {
    background-color: white;
}
`;
export const DeskText = styled.div`
font-family : "Gill Sans", sans-serif;
`;
export const DeskBody = styled.div`
height: 370px;
`;
export const DeskFooter = styled.div``;
export const Desk = styled.div`
position: relative;
top: -80px;
text-align-last: right;
button {
    background-color: #00AFF0;
    border-radius: 6px
  }

`;
export const Deskimg = styled.div`
text-align-last: start;
`;
export const Deskbg = styled.div`
position: relative;
text-align-last: center;
  top: 20px;
  z-index: -1;
`;
export const DeskSelf = styled.div`
padding: 20px;
button {
    background-color: #00AFF0;
    border-radius: 6px
  }
`;
export const DeskNav = styled.div`
height: 60px;
`;

export const DeskIcon = styled.div`
position: relative;
text-align-last: center;
top: -200px;
z-index: -1;
`;

export const DeskCopy = styled.div`
font-family: "Gill Sans", sans-serif;
font-size: 10px;
font-weight: 600;
`;

export const DeskTxt = styled.div`

`;
export const DeskType = styled.div`
font-family : "Gill Sans", sans-serif;
font-size: 30px;
padding: 10px;
`;

export const DeskId = styled.div`
position: relative;
background-color: #a7e0f5;
border-radius: 40px;
Left: 550px;
padding: 10px;
width: 800px;
height: 250px;
`;

export const DeskH2 = styled.div`
font-family: "Gill Sans", sans-serif;
font-weight: bold;
font-size: 50px;
text-align-last: left;
`;

export const DeskH1 = styled.div`
font-family: "Gill Sans", sans-serif;
text-align-last: left;
font-size: 20px;
`;