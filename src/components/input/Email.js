import React from "react";

const Email = ({ placeHolder }) => {
  return (
    <div className="input-box">
      <input type="email" placeholder={placeHolder} />
    </div>
  );
};

export default Email;
