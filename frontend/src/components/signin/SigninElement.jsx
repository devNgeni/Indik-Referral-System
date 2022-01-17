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
  margin: 20px;
`;

export const TextArea = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  Link {
    color: #00aff0 !important;
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
  width: 30rem;
  height: 6rem;
  padding: 20px;
`;
export const Email = styled.div`
  justify-content: center !important;
  display: grid !important;
  width: 20rem;
`;
export const Confirm = styled.div``;
export const Password = styled.div``;
export const Mobile = styled.div``;

export const Registered = styled.div`
  padding: 10px;
`;
export const RegisterText = styled.div`
  font-family: "Gill Sans", sans-serif;
  text-align: center;
  font-size: 1.5rem;
  padding: 40px;
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
} 
`;
export const TextImage = styled.div``;

export const MessageBox = styled.div``;
export const LoadingBox = styled.div``;
