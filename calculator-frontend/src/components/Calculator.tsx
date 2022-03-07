import React, { useState } from "react";

import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import {
  ClearButton,
  EqualsButton,
  NumberButton,
  Operator,
  OperatorButton,
} from "./Button";

const App = () => {
  const initialCalc = {
    left: null,
    right: null,
    operator: null,
    result: null,
  };

  const [{ left, operator, result, right }, setCalc] = useState<{
    left: number | null;
    right: number | null;
    operator: Operator | null;
    result: number | null;
  }>(initialCalc);

  const clear = () => {
    setCalc(initialCalc);
  };

  const calculate = () => {
    setCalc((calc) => {
      if (!calc.left || !calc.operator || !calc.right || calc.result)
        return calc;
      switch (calc.operator) {
        case Operator.Minus:
          return { ...calc, result: calc.left - calc.right };
        case Operator.Plus:
          return { ...calc, result: calc.left + calc.right };
        case Operator.Multiply:
          return { ...calc, result: calc.left * calc.right };
      }
      return calc;
    });
  };

  const setOperator = (operator: Operator) => {
    setCalc((calc) => {
      if (result) return calc;
      return { ...calc, operator };
    });
  };

  const setValue = (value: number) => {
    setCalc((calc) => {
      if (result) return calc;
      if (operator) {
        return {
          ...calc,
          right: Number((right || "").toString() + value.toString()),
        };
      }
      return {
        ...calc,
        left: Number((left || "").toString() + value.toString()),
      };
    });
  };

  const renderedValue = (result || right || operator || left || "0").toString();

  return (
    <Wrapper>
      <Screen value={renderedValue} />
      <ButtonBox>
        <NumberButton number={7} onClick={setValue} />
        <NumberButton number={8} onClick={setValue} />
        <NumberButton number={9} onClick={setValue} />
        <OperatorButton operator={Operator.Plus} onClick={setOperator} />
        <NumberButton number={4} onClick={setValue} />
        <NumberButton number={5} onClick={setValue} />
        <NumberButton number={6} onClick={setValue} />
        <OperatorButton operator={Operator.Minus} onClick={setOperator} />
        <NumberButton number={1} onClick={setValue} />
        <NumberButton number={2} onClick={setValue} />
        <NumberButton number={3} onClick={setValue} />
        <OperatorButton operator={Operator.Multiply} onClick={setOperator} />
        <ClearButton onClick={clear} />
        <NumberButton number={0} onClick={setValue} />
        <EqualsButton onClick={calculate} />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
