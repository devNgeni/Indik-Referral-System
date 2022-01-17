import React from "react";
import Signin from "../components/signin/Signin";
import Navbar from "../components/navbar/Navbar";

function Login({ toggle }) {
  return (
    <>
      <Navbar toggle={toggle}/>
      <Signin />
    </>
  );
}

export default Login;
