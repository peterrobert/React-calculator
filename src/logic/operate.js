import Big from 'big.js';

export const operate = (numberOne, numeberTwo, operation) => {
  const first = new Big(numberOne);
  const second = new Big(numeberTwo);
  let result;

  if (operation === '-') {
    result = first.minus(second);
    return result;
  }

  if (operation === '÷') {
    result = first.div(second);
    return result;
  }

  if (operation === '+') {
    result = first.plus(second);
    return result;
  }

  if (operation === 'X') {
    result = first.times(second);
    return result;
  }

  if (operation === '=') {
    result = first.Div(second);
    return result;
  }

  return result;
};
