import React from "react";
import CalculatorHeader from "../molecules/CalculatorHeader/CalculatorHeader";
import CalculatorBody from "../organisms/CalculatorBody/CalculatorBody";
import "./style.css";

const SizeCalculator = () => {
  return (
    <div className="calculator-wrapper">
      <CalculatorHeader />
      <CalculatorBody />
    </div>
  );
};

export default SizeCalculator;
