import React from "react";
import {
  Container,
  Header,
  TextArea,
  Counter,
  Verify,
  Registered,
  RegisterText
} from "./InviteElement";
import { Link } from 'react-router-dom'
function Verification(props) {
  let name = props.name;
  console.log("props", props);
  return (
    <Container>
      <Header>{name}</Header>
      <TextArea>
        Your account has been verified.Please
        Enter Your invitation code received.
        From Your Friends and Family.
      </TextArea>
      <Verify>
      <input
            type="text"
            name="password"
            placeholder="5as4dasd5gfg713fdg6"
          />
      </Verify>
      <button
        style={{
          padding: "15px",
          width: "300px",
          backgroundColor: "#00AFF0",
          border: "1px #00AFF0",
          borderRadius: "13px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Submit
      </button>
      <Registered>
        <RegisterText style={{ display: "grid" }}>
          Don't have invitation Code?
          <Counter>
          <Link
            to="/contacts"
            style={{
              color: "#00AFF0",
              textDecoration: "none",
              fontWeight: "bold",
              paddingLeft: "5px",
            }}
          >
            Skip This Step
          </Link>
          </Counter>
        </RegisterText>
      </Registered>
    </Container>
  );
}

export default Verification;
