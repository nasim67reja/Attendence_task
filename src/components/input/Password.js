import React from "react";
import "./input.scss";

const Password = ({ placeHolder }) => {
  return (
    <div className="input-box">
      <input type="password" placeholder={placeHolder} />
    </div>
  );
};

export default Password;
