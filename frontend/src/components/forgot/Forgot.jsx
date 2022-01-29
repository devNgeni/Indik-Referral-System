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
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

function forgot() {
  return (
    <Container style={{width: "100%"}}>
      <Mobile>
      <Header>Forgot Password</Header>
      <TextArea>
        We will send you a password recovery Link To Your email address
      </TextArea>
        <Form className={Content}>
          <Input
            style={{ height: '3em', width: "450px", justifyContent: "center", textAlignLast: "center"}}
            label="Username"
            name="username"
            placeholder="Phone or Email"
            className="form-control"
          />
        </Form>
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
      </Mobile>
    </Container>
  );
}

export default forgot;
