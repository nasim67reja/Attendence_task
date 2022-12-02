import React from "react";
import istockphoto from "./../../assets/istockphoto.svg";
import ultimate from "./../../assets/ultimate.svg";

const LeftBox = () => {
  return (
    <div className="left">
      <div className="image-box" style={{ transform: "translateX(-7rem)" }}>
        <img src={ultimate} alt="" />
      </div>
      <img src={istockphoto} alt="" />
    </div>
  );
};

export default LeftBox;
