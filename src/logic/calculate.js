/* eslint-disable no-unused-vars */
import { operate } from './operate';

export const calculate = (calculator, button) => {
  let { total, next, operation } = calculator;

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (button === '+/-') {
    total *= -1;
    next = 0;
    operation = null;
    return calculator;
  }

  if (button === 'A/C') {
    total = 0;
    next = 0;
    operation = null;
    return calculator;
  }

  if (button === numbers.includes(button)) {
    total = button;
    next = 0;
    operation = null;

    return calculator;
  }

  if (next === numbers.includes(next) && total === button) {
    total = 'Error';
    next = 0;
    operation = null;

    return calculator;
  }

  total = operate(total, next, button);
  return total;
};
