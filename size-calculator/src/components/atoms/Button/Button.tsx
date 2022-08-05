import React from "react";
import "./style.css";

interface ButtonProps {
  label: string;
  clickHandler: () => void;
  disabled?: boolean;
}

const Button = ({ clickHandler, label, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`size-calculator-btn ${disabled ? "disabled-button" : ""}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
