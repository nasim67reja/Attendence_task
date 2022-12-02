import React, { useState } from "react";
import useInput from "../../hook/UseInput";
import Email from "../input/Email";
import Password from "../input/Password";
import Arrow from "../other/Arrow";
import "./signupfrom.scss";

const SignUpForm = () => {
  const [i, setI] = useState(0);

  const fromSubmitHandler = (event) => {
    event.preventDefault();
    console.log("from submit event run");
  };

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

  let firstStepIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid)
    firstStepIsValid = true;

  return (
    <form onSubmit={fromSubmitHandler}>
      <div className="form-box">
        <div
          className="box"
          style={{ transform: `translateX(${(0 - i) * 100}%)` }}
        >
          <input
            type="text"
            placeholder="Write First Name"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          <input
            type="text"
            placeholder="Write Last Name"
            onChange={lasttNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
        </div>
        <div
          className="box"
          style={{ transform: `translateX(${(1 - i) * 100}%)` }}
        >
          <div className="number-box">
            <span>+880</span>
            <input type="number" placeholder="1XXXXXXXX" />
          </div>
          <Email placeHolder="Write Email Adress"></Email>
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
          onClick={(e) => {
            e.preventDefault();
            setI((prevSt) => prevSt + 1);
          }}
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
              onClick={(e) => {
                e.preventDefault();
                setI((prevSt) => prevSt + 1);
              }}
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
