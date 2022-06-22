import { ILogic } from "./logic.interface";

export const logic: ILogic = {
  add(left: number, right: number): number {
    return left + right;
  },
  subtract(left: number, right: number): number {
    return left - right;
  },
  multiply(left: number, right: number): number {
    return left * right;
  },
};
