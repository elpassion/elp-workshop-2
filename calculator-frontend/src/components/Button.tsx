import React from "react";
import "./Button.css";

const Button: React.FC<{
  value: string;
  onClick: () => void;
  className?: string;
}> = ({ className, value, onClick }) => {
  return (
    <button className={"button " + className} onClick={onClick}>
      {value}
    </button>
  );
};

export const OperatorButton: React.FC<{
  operator: Operator;
  onClick: (operator: Operator) => void;
  className?: string;
}> = ({ className, operator, onClick }) => {
  return (
    <Button
      className={className}
      onClick={() => onClick(operator)}
      value={operator}
    />
  );
};

export const NumberButton: React.FC<{
  number: number;
  onClick: (number: number) => void;
  className?: string;
}> = ({ className, number, onClick }) => {
  return (
    <Button
      className={className}
      onClick={() => onClick(number)}
      value={number.toString()}
    />
  );
};

export const EqualsButton: React.FC<{
  onClick: () => void;
  className?: string;
}> = ({ className, onClick }) => {
  return <Button className={"equals"} onClick={onClick} value={"="} />;
};

export const ClearButton: React.FC<{
  onClick: () => void;
  className?: string;
}> = ({ className, onClick }) => {
  return <Button onClick={onClick} value={"CE"} />;
};

export enum Operator {
  Plus = "+",
  Minus = "-",
  Multiply = "*",
}

export default Button;
