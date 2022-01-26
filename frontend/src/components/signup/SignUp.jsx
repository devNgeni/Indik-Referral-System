import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Register } from "../../actions/userActions";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
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
} from "./SignupElement";

// Form validation
const required = (value) => {
  if (!value) {
    return <AlertText role="alert">This field is Required</AlertText>;
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return <AlertText role="alert">This is not a valid email.</AlertText>;
  }
};

const name = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <AlertText role="alert">
        The username must be between 3 and 20 characters.
      </AlertText>
    );
  }
};

const phone = (value) => {
  if (value.length < 10 || value.length > 12) {
    return (
      <AlertText role="alert">
        The username must be between 10 and 12 characters.
      </AlertText>
    );
  }
};

const password = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <AlertText role="alert">
        The password must be between 6 and 40 characters.
      </AlertText>
    );
  }
};

const confirmPassword = (value) => {
  if (value === password.value) {
    return (
      <AlertText role="alert">
        ConfirmPassword must much with the Password
      </AlertText>
    );
  }
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeconfirmPassword = this.onChangeconfirmPassword.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      successful: false,
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeconfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          Register(
            this.state.name,
            this.state.email,
            this.state.phone,
            this.state.password,
            this.state.confirmPassword
          )
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;
    return (
      <Container>
        <Header>Let's Create Your Account</Header>
        <TextArea>
          We will send a text to verify your mobile number and a link to your
          email to verify your account. your email
        </TextArea>
        <Form
          onSubmit={this.handleRegister}
          ref={(c) => {
            this.form = c;
          }}
        >
          {!this.state.successful && (
            <DangerContainer className={Label}>
              <NameText>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className={Name}
                  value={this.state.name}
                  onChange={this.onChangeName}
                  validations={[required, name]}
                ></input>
              </NameText>
              <NameText>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className={Name}
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  validations={[required, email]}
                />
              </NameText>
              <NameText>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className={Name}
                  value={this.state.phone}
                  onChange={this.onChangePhone}
                  validations={[required, phone]}
                />
              </NameText>
              <NameText>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className={Name}
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required, password]}
                />
              </NameText>
              <NameText>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                  className={Name}
                  value={this.state.confirmPassword}
                  onChange={this.onChangeconfirmPassword}
                  validations={[required, confirmPassword]}
                />
              </NameText>

              <TextBtn>
                <button type="submit">Create Account</button>
              </TextBtn>
            </DangerContainer>
          )}
          {message && (
            <div className="form-group">
              <div
                className={
                  this.state.successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </Form>
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
}

function mapStateToProps(state) {
  const message = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(SignUp);
// 3150296121
