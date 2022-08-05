import React from "react";
import SizeInput from "../../atoms/SizeInput/SizeInput";
import "./style.css";

const UserInput = () => {
  return (
    <div className="user-input-wrapper">
      <p>
        My size is <SizeInput /> inches
      </p>
    </div>
  );
};

export default UserInput;
