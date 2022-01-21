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
  RegisterLink,
} from "./ProfitElement";
import background from "../../images/Profit/background.svg";
import back from "../../images/Profit/back.svg";
import { Link } from "react-router-dom";

function Profit() {
  return (
    <Container>
      <Circle>
        <CircleUnder>
          <img src={background} alt="Welcome" />
        </CircleUnder>
        <CircleOver>
          <img src={back} alt="Welcome" />
        </CircleOver>
      </Circle>
      <TextHeader color="grey">&nbsp;&nbsp;Get 50% Profit&nbsp;&nbsp;</TextHeader>
      <TextArea>The only thing you need is a license and 3 friends</TextArea>
      <TextBtn>
        <Link to="/signup">
          <button
            className="obato"
            style={{
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: "8px",
              width: "450px",
              fontWeight: "bold",
            }}
          >
            Get Started
          </button>
        </Link>
      </TextBtn>
      <Registered>
        <RegisterText>Already Registered?</RegisterText>
        <RegisterLink>
          <Link to="/signin" style={{ color: "#00AFF0", textDecoration: "none", }}>
            Signin
          </Link>
        </RegisterLink>
      </Registered>
    </Container>
  );
}

export default Profit;
