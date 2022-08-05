import React from "react";
import "./style.css";

interface BodyWrapperProps {
  children: React.ReactNode;
}
const BodyWrapper = ({ children }: BodyWrapperProps) => {
  return <div className="calculator-body-wrapper">{children}</div>;
};

export default BodyWrapper;
