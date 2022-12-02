import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { URL } from "../../App";
import useInput from "../../hook/UseInput";
import "./loginform.scss";

const LoginForm = () => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length > 7);

  const navigate = useNavigate();

  const [token, setToken] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [result, setResult] = useState("");

  const loginPostCall = async () => {
    try {
      const data = await axios.post(`${URL}/login`, {
        email: enteredEmail,
        password: enteredPassword,
      });
      setResult("Log in successfully");
      setToken(data.data.access_token);
      setIsloading(false);
      setTimeout(() => {
        navigate("/attendance");
      }, 300);
    } catch (error) {
      console.log(`error: `, error.response.data);
      setResult(error.response.data.error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) return;

    setIsloading(true);
    loginPostCall();

    // test acc testuser68@gmail.com pass: testuser
  };

  return (
    <>
      {result && <div className="result-text">{result}</div>}
      <form onSubmit={formSubmitHandler}>
        <div className="name-input">
          <input
            type="email"
            placeholder="Write Email Adress"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />

          {emailInputHasError && (
            <p className="error">Email must contain "@"</p>
          )}
        </div>
        <div className="name-input">
          <input
            type="Password"
            placeholder="Write Password"
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />

          {passwordInputHasError && (
            <p className="error">Your password must be 8 character</p>
          )}
        </div>
        <button className="btn btn-submit" type="submit">
          <span> Log In</span>
          {isLoading && (
            <span
              style={{
                marginLeft: "1rem",
                transform: "translateY(3px)",
                display: "inline-block",
              }}
            >
              <RotatingLines
                strokeColor="black"
                strokeWidth="6"
                animationDuration="0.75"
                width="16"
                visible={true}
              />
            </span>
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
