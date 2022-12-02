import React, { useState } from "react";
import { Link } from "react-router-dom";
import Email from "../../components/input/Email";
import Name from "../../components/input/Name";
import Password from "../../components/input/Password";
import Arrow from "../../components/other/Arrow";
import LeftBox from "../../components/other/LeftBox";
// import arrow from "./../../assets/Arrow.svg";
import "./signup.scss";

const Signup = () => {
  const [i, setI] = useState(0);

  const fromSubmitHandler = (event) => {
    event.preventDefault();
    console.log("from submit event run");
  };

  return (
    <div className="container signup flex-center">
      <div className="flex-center">
        <LeftBox />
        <div className="right">
          <h4>SignUp Form</h4>
          <form onSubmit={fromSubmitHandler}>
            <div className="form-box">
              <div style={{ transform: `translateX(${(0 - i) * 100}%)` }}>
                <Name placeHolder="Write First Name" />
                <Name placeHolder="Write Last Name" />
              </div>
              <div style={{ transform: `translateX(${(1 - i) * 100}%)` }}>
                {/* <Name placeHolder="Write First Name" /> */}
                {/* <div>input list</div> */}
                <input type="email" placeholder="Write Email Adress" />
              </div>

              <div style={{ transform: `translateX(${(2 - i) * 100}%)` }}>
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
          <div className="form-footer">
            <span>Already have an account?</span>
            <Link to="/login" className="link">
              Login here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
