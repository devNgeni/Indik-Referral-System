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
      <TextHeader color="grey">Get 50% Profit</TextHeader>
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
              width: "300px",
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
          <Link to="/signin" style={{ color: "#00AFF0" }}>
            Signin
          </Link>
        </RegisterText>
      </Registered>
    </Container>
  );
}

export default Profit;
