import React, { useState } from "react";
import "../Styling/SignUpInput.css";
import { Button } from "./Button";
import axios from "axios";
import { Link } from "react-router-dom";

function SignInput() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/register", {
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        //setResgistered Status (response)
        //console.log(response)

        if (response.data.message) {
          setRegisterStatus(response.data.message);
        } else {
          setRegisterStatus("ACCOUNT ALREADY EXISTS");
        }
      });
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription footer-subscription-heading">
          Create a new account to purchase books
        </p>
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
              name="username"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
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
              type={"submit"}
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"

              //   onClick={onclick}
            >
              <Link
                to="/aftersignup"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CREATE ACCOUNT
              </Link>
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignInput;
