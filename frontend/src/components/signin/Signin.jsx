import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Label,
  Name,
  Email,
  NameText,
  TextArea,
  TextBtn,
  Registered,
  RegisterText,
  TextImage,
  LoadingBox,
  MessageBox
} from "./SigninElement";
import hidePwdImg from "../../images/Show/hidePwdImg.svg";
import showPwdImg from "../../images/Show/hidePwdImg.svg";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signin } from '../../actions/userActions'



function Signin() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/dashboard';
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


  return (
    <Container>
      <Header>Sign into Your Account</Header>
      <form className={Label} onSubmit={submitHandler}>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        <Email>
        <NameText>
          <input
            autoFocus="autofocus"
            autoComplete="off"
            label="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
            className={Name}
            onFocus={(e) => {
          }}
          />
        </NameText>
        <NameText>
          <input
            name="pwd"
            placeholder="Enter Password"
            type={isRevealPwd ? "text" : "password"}
            value={pwd}
            required
            onChange={(e) => {setPwd(e.target.value); setPassword(e.target.value)}}
          />
        </NameText>
        <TextImage>
          <img
            style={{ margin: "10px" }}
            alt={isRevealPwd ? "Hide password" : "Show password"}
            src={isRevealPwd ? hidePwdImg : showPwdImg}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
        </TextImage>
        </Email> 
      </form>
          
      <TextArea>
        <Link
          to="/forgot"
          style={{
            color: "#00AFF0",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          Forgort password
        </Link>
      </TextArea>
      <TextBtn>
        <button
          type="submit"
          className="obato"
          style={{
            color: "white",
            border: "none",
            padding: "15px",
            marginTop: "43px",
            borderRadius: "15px",
            width: "450px",
            fontWeight: "bold",
          }}
        >
          Sign In
        </button>
      </TextBtn>
      <Registered>
        <RegisterText>
          Not Registered?
          <Link
            to={`/signup?redirect=${redirect}`}
            style={{
              color: "#00AFF0",
              textDecoration: "none",
              fontWeight: "bold",
              paddingLeft: "5px"
            }}
          >
            Create Account
          </Link>
        </RegisterText>
      </Registered>
    </Container>
  );
}

export default Signin;
