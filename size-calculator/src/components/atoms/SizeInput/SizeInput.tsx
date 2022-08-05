import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSizeVal } from "../../../redux/calculatorSlice/SizeCalculatorSlice";
import { selectCalculatorValues } from "../../../redux/store";
import "./style.css";

const SizeInput = () => {
  const sizeVal = useSelector(selectCalculatorValues);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reg = new RegExp(/^(\s*|\d*\.?\d*)$/);
    const val = e.target.value;
    if (reg.test(val)) dispatch(setSizeVal(val));
  };

  return (
    <span>
      <input
        type="text"
        className="sizeInput"
        maxLength={8}
        value={sizeVal.size}
        onChange={handleChange}
      />
    </span>
  );
};

export default SizeInput;
