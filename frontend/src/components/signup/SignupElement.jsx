import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  display: grid;
  width: 100%;
  height: 100%
  background-color: black;
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  @media screen and (min-width: 960px) {
    justify-content: center;
  }
`;
export const ContainerSub = styled.div`
  height: 80vh;
  padding-right: 15px;
  padding-left: 15px;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 14px;
  justify-content: center;
  backgrond-color: #fff;
`;
export const Header = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Gill Sans", sans-serif;
  color: #333;
  text-align-last: center;
`;

export const TextArea = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5em;
  margin: 10px;
  justify-content: center;
`;
export const Label = styled.div`
  display: column;
  justify-content: center;
`;
export const Name = styled.div`
  border: 1px solid #333;
`;
export const TextBtn = styled.div`
  justify-content: center;
  color: white;
  display: flex;
`;
export const AlertText = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5rem;
  background-color: #ffc0cb;
  color: #8b0000;
  border: auto #8b0000 solid;
  width: 450px;
  height: 5rem;
  padding: 20px;
  text-align-last: center;
  justify-items: center;
`;

export const NameText = styled.div`
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  margin-bottom: 10px;
  box-sizing: content-box;
`;
export const Email = styled.div``;
export const Confirm = styled.div``;
export const Password = styled.div``;
export const Mobile = styled.div``;

export const Registered = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;
export const RegisterText = styled.div`
  font-family: "Gill Sans", sans-serif;
  text-align-last: center;
  justify-content: center;
  font-size: 1.5em !;
  padding-top: 10px;
  margin-top: 10px;
`;

export const RegisterLink = styled.div`
  font-family: "Gill Sans", sans-serif;
  text-align-last: center;
  justify-content: center;
  font-size: 1.5em !;
  padding-top: 10px;
  margin-top: 10px;
  :hover {
    transition: all ease-in-out 0.5s;
    transform: scale(1.2);
  }
`;
export const PhoneSel = styled.div`
  display: none;
`;
export const PhoneName = styled.div``;
export const Danger = styled.div``;
export const DangerText = styled.div``;
export const DangerMail = styled.div``;
export const DangerContainer = styled.div`
  justify-content: center;
`;

export const FormGroup = styled.div``;
export const FormLabel = styled.div``;
