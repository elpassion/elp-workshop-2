import React from "react";
import "./Wrapper.css";

const Wrapper: React.FC = ({ children }) => {
  return <div className="wrapper calculator">{children}</div>;
};

export default Wrapper;
