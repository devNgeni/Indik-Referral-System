import React from "react";
import {
  ErrorContainer,
  ErrorHeader,
  ErrorBody,
  Errorbg,
  Errorimg,
  ErrorDiv,
  ErrorTwo,
} from "./ErrorElement";
import errorbg from "../../images/error/errorbg.svg";
import errorimg from "../../images/error/errorimg.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <ErrorContainer>
      <ErrorDiv>
        <Errorbg>
          <img src={errorbg} alt="Congrats" />
        </Errorbg>
        <Errorimg>
          <img src={errorimg} alt="Congrats" />
        </Errorimg>
      </ErrorDiv>
      <ErrorHeader>Error!</ErrorHeader>
      <ErrorBody>For some reason, we couldn't load😪</ErrorBody>
      <ErrorTwo>
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
            Go Home
          </button>
        </Link>
      </ErrorTwo>
    </ErrorContainer>
  );
}

export default Error;
