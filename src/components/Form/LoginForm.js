import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 7);

  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const loginPostCall = async () => {
    try {
      const data = await axios.post(`${URL}/login`, {
        email: enteredEmail,
        password: enteredPassword,
      });
      //  setIsloading(false);
      //  setSuccessful("Sign Up successfully");
      //   console.log(data.data.access_token);
      setToken(data.data.access_token);
      console.log(data);
      setTimeout(() => {
        // navigate("/");
        // document.location.reload();
        //  setSuccessful("");
      }, 300);
    } catch (error) {
      console.log(`error: `, error);
      //  setIsloading(false);
      //  setError(error.response.data.message);
      //  setTimeout(() => {
      //    setError("");
      //  }, 3000);
    }
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) return;

    resetEmailInput("");
    resetPasswordInput("");
    loginPostCall();

    // test acc testuser68@gmail.com pass: testuser
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="name-input">
        <input
          type="email"
          placeholder="Write Email Adress"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />

        {emailInputHasError && <p className="error">Email must contain "@"</p>}
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
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
