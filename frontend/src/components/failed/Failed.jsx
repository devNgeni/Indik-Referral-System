import React from "react";
import {
  FailedContainer,
  FailedHeader,
  FailedBody,
  Failedbg,
  Failedimg,
  FailedDiv,
  FailedTwo,
} from "./FailedElement";
import failedbg from "../../images/failed/failedbg.svg";
import failedimg from "../../images/failed/failedimg.svg";
import { Link } from "react-router-dom";

function Failed() {
  return (
    <FailedContainer>
      <FailedDiv>
        <Failedbg>
          <img src={failedbg} alt="Congrats" />
        </Failedbg>
        <Failedimg>
          <img src={failedimg} alt="Congrats" />
        </Failedimg>
      </FailedDiv>
      <FailedHeader>Failed!</FailedHeader>
      <FailedBody>
        Sorry you do not have enough money in your account. kindly top up and
        try again
      </FailedBody>
      <FailedTwo>
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
            Try Again
          </button>
        </Link>
      </FailedTwo>
    </FailedContainer>
  );
}

export default Failed;
