import React from "react";
import {
  HoorayContainer,
  HoorayHeader,
  HoorayBody,
  HoorayTitle,
  Hooraybg,
  ServiceTwo,
  Hoorayimg,
  HoorayDiv,
} from "./HoorayElement";
import hooray from "../../images/Hooray/hooray.svg";
import { Link } from "react-router-dom";
import congratsbg from "../../images/congrats/congratsbg.svg";

function Hooray() {
  return (
    <HoorayContainer>
      <HoorayDiv>
        <Hooraybg>
          <img src={congratsbg} alt="Congrats" />
        </Hooraybg>
        <Hoorayimg>
          <img src={hooray} alt="Congrats" />
        </Hoorayimg>
      </HoorayDiv>
      <HoorayHeader>Hooray!</HoorayHeader>
      <HoorayBody>You Have successfully purchased Your</HoorayBody>
      <HoorayTitle>License. As soon as any license are</HoorayTitle>
      <HoorayTitle>Purchased using your initation code, you</HoorayTitle>
      <HoorayTitle>wil receive a pix transfer in the account</HoorayTitle>
      <HoorayTitle>You Registered</HoorayTitle>
      <ServiceTwo>
        <Link to="/signup">
          <button>
            Go to Dashboard
          </button>
        </Link>
      </ServiceTwo>
    </HoorayContainer>
  );
}
export default Hooray;
