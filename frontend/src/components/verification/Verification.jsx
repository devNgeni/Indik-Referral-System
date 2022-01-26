import React from "react";
import {
  Container,
  Header,
  TextArea,
  Counter,
  Verify,
  Code,
  Registered,
  RegisterText,
  VerifyButton
} from "./VerificationElement";
import ReactInputVerificationCode from "react-input-verification-code";
import { Link } from "react-router-dom";
function Verification(props) {
  let number = props.phone;
  console.log("props", props);
  return (
    <Container>
      <Header>Verification</Header>
      <TextArea>
        we have sent a verification code to your email. enter the code you received on your
        Email Address. then confirm your email by clicking the link we sent.
      </TextArea>
      <Counter>Enter Code Sent to{number}</Counter>
      <Verify>
        <ReactInputVerificationCode />
      </Verify>
      <Code>code is valid for</Code>
      <VerifyButton>
        <button
          style={{
            padding: "10px",
            width: "450px",
            height: "3em",
            backgroundColor: "#00AFF0",
            border: "1px #00AFF0",
            borderRadius: "13px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Verify
        </button>
      </VerifyButton>

      <Registered>
        <RegisterText style={{ display: "inline-flex" }}>
          Didnt Receive Your Code?
          <Link
            to="/contacts"
            style={{
              color: "#00AFF0",
              textDecoration: "none",
              fontWeight: "bold",
              paddingLeft: "5px",
            }}
          >
            Resend Code
          </Link>
        </RegisterText>
      </Registered>
    </Container>
  );
}

export default Verification;
