import { operate } from './operate';

export const calculate = (data, button) => {
  const { total, next, operation } = data;

  const oper = ['+', '-', 'X', '÷', '%'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (oper.includes(button) && next && total) {
    return {
      total: operate(total, next, operation).toString(),
      operation: button,
      next: null,
    };
  }

  if (oper.includes(button) && !next && total) {
    return {
      total,
      operation: button,
      next,
    };
  }

  if (oper.includes(button) && next && !total) {
    return {
      total: next,
      operation: button,
      next: null,
    };
  }

  if (total === 'ERROR') {
    return {
      total: null,
      operation: null,
      next: null,
    };
  }

  if (numbers.includes(button)) {
    return {
      total,
      next: next ? `${next}${button}` : `${button}`,
      operation,
    };
  }

  if (button === '+/-' && !next && total && total !== 'ERROR') {
    return {
      total: (total * -1).toString(),
      next,
      operation,
    };
  }

  if (button === '+/-' && next && total !== 'ERROR') {
    return {
      total,
      next: (next * -1).toString(),
      operation,
    };
  }

  if (button === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (button === '=') {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  if (button === '.') {
    if (!next) {
      return {
        total,
        next: '0.',
        operation,
      };
    }
    if (next && !next.includes('.')) {
      return {
        total,
        next: `${next}.`,
        operation,
      };
    }
  }

  return [total, next, operation];
};
