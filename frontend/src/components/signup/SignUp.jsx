import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Register } from "../../actions/userActions";
import {
  Container,
  Header,
  TextArea,
  Label,
  Name,
  NameText,
  TextBtn,
  Registered,
  RegisterLink,
  RegisterText,
  DangerContainer,
  FormGroup,
  FormLabel,
} from "./SignupElement";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input/input";
import { isPossiblePhoneNumber } from "libphonenumber-js/core";
import countryNames from "react-phone-number-input/locale/pt-BR.json";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";

function SignUp(props) {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(Register(name, email, phone, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  // Outputs: [AC, AD, AE, ...]
  console.log(getCountries());

  // Outputs: United States
  console.log(countryNames["BR"]);

  // Outputs: +1
  console.log("+" + getCountryCallingCode("BR"));

  return (
    <Container>
      <Header>Let's Create Your Account</Header>
      <TextArea>
        We will send a text to verify your mobile number and a link to your
        email to verify your account. your email
      </TextArea>
      <form onSubmit={submitHandler} className={Label}>
        <DangerContainer>
          <NameText>
            <input
              type="text"
              id="Username"
              placeholder="Enter Name"
              className={Name}
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </NameText>
          <NameText>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className={Name}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </NameText>
          <PhoneInput>
            <Input
              defaultCountry="BR"
              countrySelectProps={{ unicodeFlags: true }}
              type="number"
              id="number"
              placeholder="Enter Mobile Number"
              className={Name}
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={
                phone
                  ? isValidPhoneNumber(phone)
                    ? undefined
                    : "Invalid Phone Number"
                  : "Phone number required"
              }
            />
          Is possible: {phone && isPossiblePhoneNumber(phone) ? 'true' : 'false'}
          is valid: {phone && isValidPhoneNumber(phone) ? "true" : "true"}
          National: {phone && formatPhoneNumber(phone)}
          International: {phone && formatPhoneNumberIntl(phone)}
          </PhoneInput>
          <NameText>
            <input
              type="text"
              id="password"
              placeholder="Enter Password"
              className={Name}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </NameText>
          <NameText>
            <input
              type="text"
              id="confirmPassword"
              placeholder="Enter Confirm Password"
              className={Name}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </NameText>
        </DangerContainer>
      </form>
      <FormGroup>
        <FormLabel
          style={{ justifyContent: "center" }}
          label={
            <Link
              to="/"
              style={{
                fontFamily: '"Gill Sans", sans-serif',
                color: "#00AFF0",
                textDecoration: "none",
                fontWeight: "300px",
              }}
            >
              <span style={{ color: "#333" }}>I agree to the</span> Terms &
              conditions
            </Link>
          }
        />
      </FormGroup>
      <TextBtn>
        <button
          className="obato"
          onClick={(e) => Register(e)}
          style={{
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "15px",
            width: "400px",
            fontWeight: "bold",
          }}
        >
          Create Account
        </button>
      </TextBtn>
      <Registered>
        <RegisterText>Already Registered?</RegisterText>
        <RegisterLink>
          <Link
            to="/Login"
            style={{
              color: "#00AFF0",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "bold",
              paddingLeft: "15px",
            }}
          >
            Sign in
          </Link>
        </RegisterLink>
      </Registered>
    </Container>
  );
}

export default SignUp;

// 3150296121
