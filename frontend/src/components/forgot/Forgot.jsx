import React from "react";
import {
  Container,
  Header,
  TextArea,
  Name,
  Content,
  Mobile,
  TextBtn,
  Registered,
  RegisterText,
} from "./ForgotElement";
import { Link } from "react-router-dom";

function forgot() {
  return (
    <Container>
      <Header>Forgot Password</Header>
      <TextArea>
        We will send you a password recovery Link To Your email address
      </TextArea>
      <Mobile>
        <form className={Content}>
          <input
            style={{ height: '3em'}}
            label="Username"
            name="username"
            placeholder="Phone or Email"
            className={Name}
          />
        </form>
      </Mobile>
      <TextBtn>
        <button
          className="obato"
          style={{
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "15px",
            width: "450px",
            fontWeight: "bold",
          }}
        >
          Recover Password
        </button>
      </TextBtn>
      <Registered>
        <RegisterText>
          Not Registered?
          <Link
            to="/signup"
            style={{
              color: "#00AFF0",
              textDecoration: "none",
              fontWeight: "bold",
              paddingLeft: "10px"
            }}
          >
            Create Account
          </Link>
        </RegisterText>
      </Registered>
    </Container>
  );
}

export default forgot;
