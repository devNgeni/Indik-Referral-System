import React from "react";
import {
  Container,
  Circle,
  CircleUnder,
  CircleOver,
  TextArea,
  TextHeader,
  TextBtn,
  Registered,
  RegisterText,
} from "./WelcomeElement";
import circle from "../../images/WelBody/circle.svg";
import welcomeicon from "../../images/WelBody/welcomeico.svg";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <Container>
      <Circle>
        <CircleUnder>
          <img src={circle} alt="Welcome" />
        </CircleUnder>
        <CircleOver>
          <img src={welcomeicon} alt="Welcome" />
        </CircleOver>
      </Circle>
      <TextHeader color="grey">Welcome to Indik</TextHeader>
      <TextArea>
        The most affordable way of monetising your social connections
      </TextArea>

      <TextBtn>
        <Link to="/signup">
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
            Get Started
          </button>
        </Link>
      </TextBtn>
      <Registered>
        <RegisterText>
          Already Registered?
          <Link
            to="/Login"
            style={{
              color: "#00AFF0",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "bold",
              paddingLeft: "10px"
            }}
          >
            Sign in
          </Link>
        </RegisterText>
      </Registered>
    </Container>
  );
}

export default Welcome;
