import React, { useState, useEffect } from "react";
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
  VerifyArea,
  ContainerSub
} from "./VerificationElement";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activate } from "../../actions/userActions";

function Verification(props) {
  const [value, setValue] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");
  const [opt5, setOpt5] = useState("");
  const [opt6, setOpt6] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const onChangeOpt1 = (e) => {
    const opt1 = e.target.value;
    setOpt1(opt1);
  };

  const onChangeOpt2 = (e) => {
    const opt2 = e.target.value;
    setOpt2(opt2);
  };

  const onChangeOpt3 = (e) => {
    const opt3 = e.target.value;
    setOpt3(opt3);
  };

  const onChangeOpt4 = (e) => {
    const opt4 = e.target.value;
    setOpt4(opt4);
  };

  const onChangeOpt5 = (e) => {
    const opt5 = e.target.value;
    setOpt5(opt5);
  };

  const onChangeOpt6 = (e) => {
    const opt6 = e.target.value;
    setOpt6(opt6);
  };
  
  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  // Handle Submit Verification Code
  const { search } = useLocation();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/congrats";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const handleSubmit = (e) => {
    e.preventDefault();
    let code = value
    if (!code) {
      alert("Enter A Valid Code from Email");
    } else {
      dispatch(activate(code));
    }
  };
  useEffect(() => {
    if (userInfo) {
      // navigate(redirect);
      return <Redirect to={redirect} />
    }
  }, [redirect, userInfo]);

  

  return (
    <Container>
      <ContainerSub>
      <Header>VERIFICATION</Header>
      <TextArea>
        we have sent a verification code to your email. enter the code you
        received on your Email. then confirm your email by clicking the link we
        sent.
      </TextArea>
      {userInfo ? (
        <Counter>Enter Code Sent to{userInfo.phone}</Counter>
      ) : (
        <Link to="/signup"></Link>
      )}

      <Verify>
        <form onSubmit={handleSubmit} style={{ display: "inline-flex" }}>
          <VerifyArea>
            <input
              name="opt1"
              type="text"
              autoComplete="off"
              className="optInput"
              value={opt1}
              onChange={onChangeOpt1}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </VerifyArea>
          <VerifyArea>
            <input
              name="opt2"
              type="text"
              autoComplete="off"
              className="optInput"
              value={opt2}
              onChange={onChangeOpt2}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </VerifyArea>
          <VerifyArea>
            <input
              name="opt3"
              type="text"
              autoComplete="off"
              className="optInput"
              value={opt3}
              onChange={onChangeOpt3}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </VerifyArea>
          <VerifyArea>
            <input
              name="opt4"
              type="text"
              autoComplete="off"
              className="optInput"
              value={opt4}
              onChange={onChangeOpt4}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </VerifyArea>
          <VerifyArea>
            <input
              name="opt5"
              type="text"
              autoComplete="off"
              className="optInput"
              value={opt5}
              onChange={onChangeOpt5}
              tabIndex="5"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </VerifyArea>
          <VerifyArea>
            <input
              name="opt6"
              type="text"
              autoComplete="off"
              className="optInput"
              value={opt6}
              onChange={onChangeOpt6}
              tabIndex="6"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </VerifyArea>
        </form>
      </Verify>
      {userInfo ? (
        <Code>code is valid for{Date.now}</Code>
      ) : (
        <Link to="/signup"></Link>
      )}

      <VerifyButton>
        <button type="submit" onClick={handleChange}>Verify</button>
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
      </ContainerSub>
    </Container>
  );
}
export default Verification;
