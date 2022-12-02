import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import { URL } from "../../App";
import useInput from "../../hook/UseInput";
import Arrow from "../other/Arrow";
import "./signupfrom.scss";

const SignUpForm = () => {
  const [i, setI] = useState(0);
  const [stepIsClear, setStepIsClear] = useState(false);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    valueChangeHandler: lasttNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberChangedHandler,
    inputBlurHandler: numberBlurHandler,
  } = useInput((value) => value.trim() !== "");
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

  const handler = (e, first, second) => {
    e.preventDefault();
    if (first && second) {
      setI((prevSt) => prevSt + 1);
      setStepIsClear(false);
    } else setStepIsClear(true);
  };

  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);

  const signUpPostCall = async () => {
    try {
      await axios.post(`${URL}/signup`, {
        first_name: enteredFirstName,
        last_Name: enteredLastName,
        phone_number: enteredNumber,
        email: enteredEmail,
        password: enteredPassword,
      });
      setIsloading(false);
      //  setSuccessful("Sign Up successfully");
      // console.log(data);

      setTimeout(() => {
        navigate("/login");
        // document.location.reload();
        //  setSuccessful("");
      }, 100);
    } catch (error) {
      console.log(`error: `, error);
      setIsloading(false);
      //  setError(error.response.data.message);
      //  setTimeout(() => {
      //    setError("");
      //  }, 3000);
    }
  };

  const fromSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredPasswordIsValid) return;
    setIsloading(true);
    signUpPostCall();
  };

  return (
    <form onSubmit={fromSubmitHandler}>
      <div className="form-box">
        {stepIsClear && (
          <p className="main-error">
            You have to fill this input box before proced
          </p>
        )}
        <div
          className="box"
          style={{ transform: `translateX(${(0 - i) * 100}%)` }}
        >
          <div className="name-input">
            <input
              type="text"
              placeholder="Write First Name"
              onChange={firstNameChangedHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
            />
            {firstNameInputHasError && (
              <p className="error">Name must not be empty</p>
            )}
          </div>
          <div className="name-input">
            <input
              type="text"
              placeholder="Write Last Name"
              onChange={lasttNameChangedHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
            />
            {lastNameInputHasError && (
              <p className="error">Name must not be empty</p>
            )}
          </div>
        </div>

        <div
          className="box"
          style={{ transform: `translateX(${(1 - i) * 100}%)` }}
        >
          <div className="number-box">
            <span>+880</span>

            <div className="name-input">
              <input
                type="number"
                placeholder="1XXXXXXXX"
                onChange={numberChangedHandler}
                onBlur={numberBlurHandler}
                value={enteredNumber}
              />

              {numberInputHasError && (
                <p className="error">Number must not be empty</p>
              )}
            </div>
          </div>

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
        </div>

        <div
          className="box"
          style={{ transform: `translateX(${(2 - i) * 100}%)` }}
        >
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
        </div>
      </div>

      {i === 0 && (
        <button
          className="btn btn-next"
          onClick={(e) =>
            handler(e, enteredFirstNameIsValid, enteredFirstNameIsValid)
          }
        >
          <span> Next Step</span>
          <span className="arrow">
            <Arrow />
          </span>
        </button>
      )}
      {(i === 1 || i === 2) && (
        <div className="btn-box">
          <button
            className="back"
            onClick={(e) => {
              e.preventDefault();
              setI((prevSt) => prevSt - 1);
            }}
          >
            Back
          </button>
          {i === 1 ? (
            <button
              className="btn btn-next"
              onClick={(e) =>
                handler(e, enteredNumberIsValid, enteredEmailIsValid)
              }
            >
              <span> Next Step</span>
              <span className="arrow">
                <Arrow />
              </span>
            </button>
          ) : (
            <button className="btn btn-signup" type="submit">
              <span> Sign Up</span>
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
          )}
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
