import React from "react";
import {
  Container,
  Header,
  TextArea,
  Counter,
  Verify,
  Code,
  Registered,
  RegisterText,
  VerifyButton,
} from "./VerificationElement";
import { Link } from "react-router-dom";
class Verification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  render() {
    return (
      <Container>
        <Header>VERIFICATION</Header>
        <TextArea>
          we have sent a verification code to your email. enter the code you
          received on your Email. then confirm your email by clicking
          the link we sent.
        </TextArea>
        <Counter>Enter Code Sent to</Counter>
        
          <Verify>
            <form onSubmit={this.handleSubmit}>
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp1}
              onKeyPress={this.keyPressed}
              onChange={(e) => this.handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp2}
              onChange={(e) => this.handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp3}
              onChange={(e) => this.handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp4"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp4}
              onChange={(e) => this.handleChange("otp4", e)}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp5"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp4}
              onChange={(e) => this.handleChange("otp5", e)}
              tabIndex="5"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />


            
            </form>
          </Verify>
          
          <Code>code is valid for</Code>
          <VerifyButton>
            <button
              style={{
                padding: "10px",
                width: "450px",
                height: "3em",
                backgroundColor: "#00AFF0",
                border: "1px #00AFF0",
                borderRadius: "13px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Verify
            </button>
          </VerifyButton>
        
        <Registered>
          <RegisterText style={{ display: "inline-flex" }}>
            Didnt Receive Your Code?
            <Link
              to="/contacts"
              style={{
                color: "#00AFF0",
                textDecoration: "none",
                fontWeight: "bold",
                paddingLeft: "5px",
              }}
            >
              Resend Code
            </Link>
          </RegisterText>
        </Registered>
      </Container>
    );
  }
}
export default Verification;
