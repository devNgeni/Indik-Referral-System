import React from "react";
import {
  CongratsContainer,
  CongratsHeader,
  CongratsBody,
  CongratsTitle,
  Congratsbg,
  Congratsimg,
  CongratsDiv,
  ServiceTwo,
} from "./CongratsElement";
import congratsbg from "../../images/congrats/congratsbg.svg";
import congratsimg from "../../images/congrats/congratsimg.svg";
import { Link } from "react-router-dom";

function Congrats() {
  return (
    <CongratsContainer>
      <CongratsDiv>
        <Congratsbg>
          <img src={congratsbg} alt="Congrats" />
        </Congratsbg>
        <Congratsimg>
          <img src={congratsimg} alt="Congrats" />
        </Congratsimg>
      </CongratsDiv>
      <CongratsHeader>Congratulations</CongratsHeader>
      <CongratsBody>You may now Purchase your License</CongratsBody>
      <CongratsTitle>and make Daily Profit</CongratsTitle>
      <ServiceTwo>
        <Link to="/signup">
          <button
            className="obato"
            style={{
              color: "white",
              backgroundColor: "#00aff0",
              border: "none",
              padding: "15px",
              borderRadius: "15px",
              width: "300px",
              fontWeight: "bold",
            }}
          >
            Get Started
          </button>
        </Link>
      </ServiceTwo>
    </CongratsContainer>
  );
}
export default Congrats;
