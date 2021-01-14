import { operate } from "./operate";

const calculate = (calculator, button) => {
 const {total, next, operation} = calculator;

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

  if (button === '%') {
    total /= 100;
    next = 0;
    operation = '%';
    return calculator;
  }

  total = operate(total, next, button);
  next = 0;
  operation = null;
  return calculator;

}

export default calculate;