import React from "react";
import "./login.scss";
import istockphoto from "./../../assets/istockphoto.svg";
import ultimate from "./../../assets/ultimate.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container login flex-center">
      <div className="flex-center">
        <div className="left">
          <div className="image-box">
            <img src={ultimate} alt="" />
          </div>
          <img src={istockphoto} alt="" />
        </div>
        <div className="right">
          <h4>Log in Form</h4>
          <form>
            <input type="email" />
            <input type="password" />
            <button type="submit">Log In</button>
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
