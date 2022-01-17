import React from "react";
import {
  ContactContainer,
  ContactHeader,
  Contactimg,
  ContactText,
  ContactBody,
  ContactDiv,
  Contactbg,
  ContactCont
} from "./ContactElement";
import contactbg from "../../images/contact/contactbg.svg";
import contactimg from "../../images/contact/contactimg.svg";
import phoneico from "../../images/contact/phoneico.svg";
import email from "../../images/contact/email.svg";
import location from "../../images/contact/location.svg";

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
        <button
          type="button"
          style={{
            border: "1px #3A5168",
            borderRadius: "15px",
            backgroundColor: "rgb(208 240 251)",
            fontWeight: "900",
            fontSize: "20px",
            width: "450px",
            padding: "20px",
            fontFamily: '"Gill Sans", sans-serif',
          }}
        >
          +55 8889 5556
        </button>
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
      </ContactBody>
      <ContactBody>
        <button
          type="button"
          style={{
            border: "1px #3A5168",
            borderRadius: "15px",
            backgroundColor: "rgb(208 240 251)",
            fontWeight: "900",
            fontSize: "20px",
            width: "450px",
            padding: "20px",
            fontFamily: '"Gill Sans", sans-serif',
          }}
        >
          support@indik.io
        </button>
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
      </ContactBody>
      <ContactBody>
        <button
          type="button"
          style={{
            border: "1px #3A5168",
            borderRadius: "15px",
            backgroundColor: "rgb(208 240 251)",
            fontWeight: "900",
            fontSize: "20px",
            width: "450px",
            padding: "20px",
            fontFamily: '"Gill Sans", sans-serif',
          }}
        >
          Cruzeiro, São Paulo
        </button>
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
      </ContactBody>
      </ContactCont>
    </ContactContainer>
  );
}

export default Contact;
