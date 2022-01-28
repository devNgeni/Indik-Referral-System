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
  RegisterLink,
  RegisterText,
  TextImage,
  LoadingBox,
  MessageBox,
  ContainerSub

} from "./SigninElement";
import hidePwdImg from "../../images/Show/hidePwdImg.svg";
import showPwdImg from "../../images/Show/hidePwdImg.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signin } from "../../actions/userActions";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


function Signin() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/login";
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
    <Container className="card card-container">
      <ContainerSub>
      <Header>Sign into Your Account</Header>
      <Form className={Label} onSubmit={submitHandler}>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        <Email className={Label}>
          <NameText>
            <Input
              style={{width:"450px"}}
              autoFocus="autofocus"
              autoComplete="off"
              label="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="form-control"
              onFocus={(e) => {}}
            />
          </NameText>
          <NameText>
            <Input
              name="pwd"
              placeholder="Enter Password"
              type={isRevealPwd ? "text" : "password"}
              value={pwd}
              className="form-control"
              required
              onChange={(e) => {
                setPwd(e.target.value);
                setPassword(e.target.value);
              }}
            />
          </NameText>
          <TextImage>
            <img
              style={{ margin: "10px"}}
              alt={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
          </TextImage>
        </Email>
     

      <TextArea>
        <Link
          to="/forgot"
          style={{
            color: "#00AFF0",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "10px",
            transition: "all ease-in-out 0.5s",
            transform: "scale(1.4)",
          }}
        >
          Forgort password
        </Link>
      </TextArea>
      <TextBtn>
        <button>
          Sign In
        </button>
      </TextBtn>
      <Registered>
        <RegisterText>
          Not Registered?
        </RegisterText>
        <RegisterLink>
          <Link
            to={`/signup?redirect=${redirect}`}
            style={{
              color: "#00AFF0",
              textDecoration: "none",
              fontWeight: "bold",
              paddingLeft: "5px",
              hover: "transition: all ease-in-out 0.5s  transform: scale(1.2)"
            }}
          >
            Create Account
          </Link>
        </RegisterLink>
      </Registered>
       </Form>
      </ContainerSub>
    </Container>
  );
}

export default Signin;
