import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/Form/SignUpForm";
import LeftBox from "../../components/other/LeftBox";
import "./signup.scss";

const Signup = () => {
  return (
    <div className="container signup flex-center">
      <div className="flex-center">
        <LeftBox />
        <div className="right">
          <h4>SignUp Form</h4>
          <SignUpForm />
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
