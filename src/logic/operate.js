/* eslint-disable import/prefer-default-export */
import Big from 'big.js';

export const operate = (numberOne, numberTwo, operation) => {
  let data = 0;
  const num1 = Big(numberOne || '0');
  const num2 = Big(numberTwo || '0');

  switch (operation) {
    case '÷':
      try {
        data = num1.div(num2);
      } catch (e) {
        data = 'ERROR';
      }
      break;
    case 'X':
      data = num1.times(num2);
      break;
    case '+':
      data = num1.plus(num2);
      break;
    case '-':
      data = num1.minus(num2);
      break;
    case '%':
      data = num1.times(Big(0.01));
      break;
    default:
      break;
  }

  return data.toString();
};

export default operate;
