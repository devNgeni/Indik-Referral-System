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
export const ContainerSub = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
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
  font-size: 1.5rem;
  text-align-last: center;
  text-decoration: none;
  font-weight: bold;
  width: 100%;
  height: 4rem
  Link {
    color: #00aff0 !important;
  }
  :hover {
    transition: all ease-in-out 0.5s;
    transform: scale(1.2);
  }
`;
export const Label = styled.div`
  display: column;
  justify-content: center;
`;
export const Name = styled.div`
  border: 1px solid #333;
`;
export const NameText = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 1.5rem;
`;
export const Email = styled.div`
  justify-content: center !important;
  display: grid !important;
  width: 100%;
`;
export const Confirm = styled.div``;
export const Password = styled.div``;
export const Mobile = styled.div``;

export const Registered = styled.div`
  padding: 10px;
  display: inline-flex;
  justify-content: center;
`;
export const RegisterText = styled.div`
  font-family: "Gill Sans", sans-serif;
  text-align: center;
  font-size: 1.5rem;
`;
export const RegisterLink = styled.div`
  padding-left: 20px;
  font-family: "Gill Sans", sans-serif;
  text-align: center;
  font-size: 1.5rem;
  :hover {
    transition: all ease-in-out 0.5s;
    transform: scale(1.1);
  }
`;

export const TextBtn = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: white;
  padding: 4px;
  @media screen and (max-with: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const TextImage = styled.div`
text-align-last: center;
`;

export const MessageBox = styled.div``;
export const LoadingBox = styled.div``;
