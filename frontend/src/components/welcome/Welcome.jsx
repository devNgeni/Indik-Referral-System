import React, { useEffect } from "react";
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
import { Link, useHistory , NavLink  } from "react-router-dom";

function Welcome() {
const routerHistory = useHistory();
 const handleOnSubmit = () => {
    return routerHistory.push("/signup")
    };

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
        <button onClick={handleOnSubmit}>Get Started</button>
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
              paddingLeft: "10px",
              cursor:"pointer"
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
