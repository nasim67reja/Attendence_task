import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import Email from "../../components/input/Email";
import Password from "../../components/input/Password";
import LeftBox from "../../components/other/LeftBox";

const Login = () => {
  return (
    <div className="container login flex-center">
      <div className="flex-center">
        <LeftBox />
        <div className="right">
          <h4>Log in Form</h4>
          <form>
            <Email placeHolder="Write Email Address" />
            <Password placeHolder="Write Password" />
            <button className="btn btn-submit" type="submit">
              Log In
            </button>
          </form>
          <div className="form-footer">
            <span>Don’t have an account?</span>
            <Link to="/signup" className="link">
              signup here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
