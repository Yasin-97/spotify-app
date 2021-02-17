import React from "react";
import "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./login.css";
import logo from "../../img/logo.png";
import { loginUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="spotify-logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
