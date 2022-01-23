import React, { useEffect, useState } from "react";
import {useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Register } from '../../actions/userActions'
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
  FormLabel
} from "./SignupElement";


function SignUp(props) {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

      const dispatch = useDispatch();
      const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          alert('Password and confirm password are not match');
        } else {
          dispatch(Register(name, email, phone, password));
        }
      };
      useEffect(() => {
        if (userInfo) {
          navigate(redirect);
        }
      }, [navigate, redirect, userInfo]);
    
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
            <NameText>
              <input
                type="number"
                id="number"
                placeholder="Enter Mobile Number"
                className={Name}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </NameText>
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
        <RegisterText>
          Already Registered?
        </RegisterText>
        <RegisterLink>
          <Link
            to="/Login"
            style={{
              color: "#00AFF0",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "bold",
              paddingLeft: "15px"
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