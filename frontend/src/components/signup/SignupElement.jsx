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
display: flex;
justify-content: center;
color: white;

button {
        background-color: #00AFF0;
        border-radius: 6px
        color: #ffff;
      }
`;
export const NameText = styled.div`
  width: 25rem;
  height: 4rem;
  align-content: center;
  justify-content: center;
  margin-bottom: 30px;
`;
export const Email = styled.div``;
export const Confirm = styled.div``;
export const Password = styled.div``;
export const Mobile = styled.div``;

export const Registered = styled.div``;
export const RegisterText = styled.div`
  font-family: "Gill Sans", sans-serif;
  text-align-last: center;
  justify-content: center;
  font-size: 1.5em;
  padding: 10px;
  margin: 10px;
`;

export const Danger = styled.div``;
export const DangerText = styled.div``;
export const DangerMail = styled.div``;
export const DangerContainer = styled.div`
  justify-content: center;
  padding: 40px;
`;

export const FormGroup = styled.div``;
export const FormLabel = styled.div``;
