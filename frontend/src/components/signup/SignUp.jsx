import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { Register } from "../../actions/userActions";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import CheckButton from "react-validation/build/button";
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
  AlertText,
  PhoneSel,
  ContainerSub,
} from "./SignupElement";

// Form validation
const required = (value) => {
  if (!value) {
    return (
      <AlertText className="alert alert-danger" role="alert">
        !This field is Required
      </AlertText>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <AlertText className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </AlertText>
    );
  }
};

const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <AlertText className="alert alert-danger" role="alert">
        This is not a valid email.
      </AlertText>
    );
  }
};

const vphone = (value) => {
  if (value.length < 10 || value.length > 12) {
    return (
      <AlertText className="alert alert-danger" role="alert">
        The phone must be between 10 and 12 characters.
      </AlertText>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <AlertText role="alert">
        The password must be between 6 and 40 characters.
      </AlertText>
    );
  }
};

const vconfirmPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <AlertText className="alert alert-danger" role="alert">
        ConfirmPassword must much with the Password
      </AlertText>
    );
  }
};

const SignUp = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeconfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(Register(name, email, phone, password, confirmPassword))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
    return (
      <Container className="card card-container">
        <ContainerSub>
          <Header>Let's Create Your Account</Header>
          <TextArea>
            We will send a text to verify your mobile number and a link to your
            email to verify your account. your email
          </TextArea>
          <Form
            onSubmit={handleRegister}
            ref={form}
          >
            {!successful && (
              <DangerContainer className={Label}>
                <NameText>
                  <label htmlFor="name">Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter User Name"
                    className="form-control"
                    value={name}
                    onChange={onChangeName}
                    validations={[required, vusername]}
                  ></Input>
                </NameText>
                <NameText>
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter a Valid Email"
                    className="form-control"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, vemail]}
                  />
                </NameText>
                <NameText>
                  <label htmlFor="phone">Phone</label>
                  <Input
                    type="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="form-control"
                    value={phone}
                    onChange={onChangePhone}
                    validations={[required, vphone]}
                  />
                </NameText>
                <NameText>
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="form-control"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </NameText>
                <NameText>
                  <label htmlFor="confirmPasswword">Confirm Password</label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Confirm Password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={onChangeconfirmPassword}
                    validations={[required, vconfirmPassword]}
                  />
                </NameText>

                <TextBtn>
                  <button type="submit">Create Account</button>
                </TextBtn>
              </DangerContainer>
            )}
            <DangerContainer className={Label}>
              <CheckButton
                style={{
                  display: "none",
                  backgroundColor: "white",
                  width: "1px",
                  height: "1px",
                }}
                ref={checkBtn}
              />
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </DangerContainer>

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
          </Form>
        </ContainerSub>
      </Container>
    );
  
};

export default SignUp;
// 3150296121
