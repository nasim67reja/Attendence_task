import React, { useState } from "react";
import useInput from "../../hook/UseInput";
import Email from "../input/Email";
import Password from "../input/Password";
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
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lasttNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberChangedHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumberInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const handler = (e, first, second) => {
    e.preventDefault();
    if (first && second) {
      setI((prevSt) => prevSt + 1);
      setStepIsClear(false);
    } else setStepIsClear(true);
  };

  const fromSubmitHandler = (event) => {
    event.preventDefault();
    console.log("from submit event run");
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
          <Password placeHolder="Write Password" />
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
              style={{ transform: "translateX(-1.4rem)" }}
            >
              <span> Next Step</span>
              <span className="arrow">
                <Arrow />
              </span>
            </button>
          ) : (
            <button className="btn btn-signup" type="submit">
              Sign Up
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
