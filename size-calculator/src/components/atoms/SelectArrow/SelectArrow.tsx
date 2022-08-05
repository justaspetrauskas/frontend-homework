import React, { useEffect, useState } from "react";
import "./style.css";

interface SelectArrowProps {
  state?: boolean;
  handleClick: () => void;
}

const SelectArrow = ({ state, handleClick }: SelectArrowProps) => {
  return (
    <button
      className={`select-input-arrow ${
        state ? "select-input-arrow--active" : ""
      }`}
      onClick={handleClick}
    >
      <svg
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.53617 8.99272L0.747868 0.791069L10.2449 0.745107L5.53617 8.99272Z"
          fill="#B4C6C1"
        />
      </svg>
    </button>
  );
};

export default SelectArrow;
