import React from "react";
import "./ButtonBox.css";

const ButtonBox: React.FC = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;
