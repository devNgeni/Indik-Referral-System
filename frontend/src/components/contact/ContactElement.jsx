import styled from "styled-components";

export const ContactContainer = styled.div`
  justify-content: center;
  align-content: center;
  text-align-last: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    align-content: center;
  }
`;
export const ContactNavbar = styled.div`
  text-align-last: start;
  padding: 20px;
`;
export const ContactHeader = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
`;
export const Contactbg = styled.div`
  position: relative;
  text-align-last: center;
  top: 20px;
  z-index: -1;
`;
export const Contactimg = styled.div`
  position: relative;
  text-align-last: center;
  top: -250px;
  right: 15px;
  z-index: -1;
`;
export const ContactText = styled.div`
  position: relative;
  top: -54px;
  left: -160px;
  boder-radius: 50%;
  height: 10px;
`;
export const ContactBody = styled.div`
  height: 80px;
  padding-left: -20px;
  font-family: "Gill Sans", sans-serif;
  button:hover::before {
    opacity: 0 ;
    transform: scale(0.5,0.5);
  }
  button:hover {
    color: #00aff0;
    transition: all ease-in-out 0.5s;
    transform: scale(1.2);
  }
  button:hover::after {
    opacity: 1;
    transform: scale(1,1);
  }
  @media screen and (max-width: 960px) {
    align-content: center;
    }
`;
export const ContactDiv = styled.div`
  height: 300px;
  margin: 20px;
  padding-right: 10px;
`;

export const Contactico = styled.div`
  position: relative;
  text-align-last: center;
  top: -60px;
  left: -100px;
  z-index: -1;
`;
export const ContactCont = styled.div`
  margin: -4px;
`;
