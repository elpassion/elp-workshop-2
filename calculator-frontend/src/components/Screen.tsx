import React from "react";
import "./Screen.css";

const Screen: React.FC<{ value: string }> = ({ value }) => {
  return <div className={"screen"}>{value}</div>;
};

export default Screen;
