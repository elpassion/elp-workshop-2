export async function rpn(inputString: string): Promise<number> {
  if (inputString.length === 0) throw new Error('Invalid expression');

  const tokensToOperationsMap = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '/': (a: number, b: number) => a / b,
    '*': (a: number, b: number) => a * b,
  };

  const operandsAndOperators: Array<OperandOrOperator> = inputString
    .split(' ')
    .map((token) => {
      const parsedToken = isNaN(Number(token))
        ? tokensToOperationsMap[token]
        : Number(token);
      if (parsedToken === undefined) throw new Error('Invalid expression');
      return parsedToken;
    });

  const stack: number[] = [];

  operandsAndOperators.forEach((operandOrOperator) => {
    let result;

    function assertEnoughOperands(
      operands: number[],
    ): asserts operands is [number, number] {
      if (operands.length !== 2) throw new Error('Not enough operands');
    }

    if (isOperator(operandOrOperator)) {
      const operands = stack.splice(-2);
      assertEnoughOperands(operands);
      result = operandOrOperator(...operands);
    } else result = operandOrOperator;
    stack.push(result);
  });

  function isOperator(
    operandOrOperator: OperandOrOperator,
  ): operandOrOperator is Operator {
    return typeof operandOrOperator === 'function';
  }

  return stack[0];
}

type Operand = number;
type Operator = (a: number, b: number) => number;
type OperandOrOperator = Operand | Operator;
