import React, { useState } from "react";
import "../Styling/SignInData.css";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// function handleClickEvent() {
//   navigate("/AfterSignUp");
// }

function SignInData() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        //set Login Status (response)
        //console.log(response)

        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus("YOU ARE NOT REGISTERED");
        }
      });
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription footer-subscription-heading">LOGIN</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your Email"
            />

            <input
              className="footer-input"
              name="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter password"
            />

            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
              type={"submit"}
              onClick={onclick}
            >
              LOGIN TO ACCOUNT
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignInData;
