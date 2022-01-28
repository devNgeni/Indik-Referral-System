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
          <ExternalLink href="https://www.iubenda.com/termos-e-condicoes/43737335" style={{textDecoration: "none"}}>
            <button>
              Terms & Conditions
            </button>
          </ExternalLink>
        </TermsHeader>
        <TermsList>
        <ExternalLink href="https://www.iubenda.com/privacy-policy/43737335" style={{textDecoration: "none"}}>
            <button>
              Privacy Policy
            </button>
          </ExternalLink>
        </TermsList>
      </TermsDiv>
    </TermsContainer>
  );
}

export default Terms;
