import React from "react";
import SecretSauceLogo from "../../atoms/SecretSauceLogo/SecretSauceLogo";
import SecretSauceLogoText from "../../atoms/SecretSauceLogoText/SecretSauceLogoText";
import "./style.css";

const CalculatorHeader = () => {
  return (
    <div className="calculator-header--wrapper">
      <SecretSauceLogo />
      <SecretSauceLogoText />
    </div>
  );
};

export default CalculatorHeader;
