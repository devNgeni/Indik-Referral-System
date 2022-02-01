import React from "react";
import {
  ContactContainer,
  ContactHeader,
  Contactimg,
  ContactText,
  ContactBody,
  ContactDiv,
  Contactbg,
  ContactCont,
  ContactButton,
} from "./ContactElement";
import contactbg from "../../images/contact/contactbg.svg";
import contactimg from "../../images/contact/contactimg.svg";
import phoneico from "../../images/contact/phoneico.svg";
import email from "../../images/contact/email.svg";
import location from "../../images/contact/location.svg";
import { ExternalLink } from "react-external-link";

function Contact() {
  return (
    <ContactContainer>
      <ContactHeader>Contact US</ContactHeader>
      <ContactDiv>
        <Contactbg>
          <img src={contactbg} alt="background" />
        </Contactbg>
        <Contactimg>
          <img src={contactimg} alt="foreround" />
        </Contactimg>
      </ContactDiv>
      <ContactCont>
        <ContactBody>
          <ContactText>
            <img
              src={phoneico}
              alt="ico"
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
          </ContactText>
          <ContactButton>
            <button type="button">+55 8889 5556</button>
          </ContactButton>
        </ContactBody>
        <ContactBody>
          <ContactText>
            <img
              src={email}
              alt="ico"
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
          </ContactText>
          <ContactButton>
            <ExternalLink href="mailto:support@indik.io">
              <button type="button">support@indik.io</button>
            </ExternalLink>
          </ContactButton>
        </ContactBody>
        <ContactBody>
          <ContactText>
            <img
              src={location}
              alt="ico"
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "10px",
                fontFamily: '"Gill Sans", sans-serif',
              }}
            />
          </ContactText>
          <ContactButton>
          <button type="button">Cruzeiro, São Paulo</button>
          </ContactButton>
        </ContactBody>
      </ContactCont>
    </ContactContainer>
  );
}

export default Contact;
