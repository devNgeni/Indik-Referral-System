import React from "react";
import {
  TermsContainer,
  TermsHeader,
  TermsImage,
  TermsBg,
  TermsIcon,
  TermsDiv,
  TermsList
} from "./TermsElement";
import background from "../../images/Profit/background.svg";
import back from "../../images/Profit/back.svg";
import { ExternalLink } from 'react-external-link'


function Terms() {
  return (
    <TermsContainer>
      <TermsBg>
        <TermsImage>
          <img src={background} alt="Welcome" />
        </TermsImage>
        <TermsIcon>
          <img src={back} alt="Welcome" />
        </TermsIcon>
      </TermsBg>
      <TermsDiv>
        <TermsHeader>
          <ExternalLink href="https://www.iubenda.com/termos-e-condicoes/43737335">
            <button
              className="obato"
              style={{
                color: "white",
                border: "none",
                padding: "15px",
                borderRadius: "8px",
                width: "450px",
                height: "3em",
                fontWeight: "bold",
              }}
            >
              Terms & Conditions
            </button>
          </ExternalLink>
        </TermsHeader>
        <TermsList>
        <ExternalLink href="https://www.iubenda.com/privacy-policy/43737335">
            <button
              className="obato"
              style={{
                color: "white",
                border: "none",
                padding: "15px",
                borderRadius: "8px",
                width: "450px",
                height: "3em",
                fontWeight: "bold",
              }}
            >
              Privacy Policy
            </button>
          </ExternalLink>
        </TermsList>
      </TermsDiv>
    </TermsContainer>
  );
}

export default Terms;
