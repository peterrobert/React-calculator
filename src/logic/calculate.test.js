import calculator from './calculate';
import operation from './operate';

describe('Calculate', () => {
  it('should return an object with total, button name, and null for next', () => {
    const dataObj = {
      total: operation(10, 5, '+'),
      operation: '+',
      next: null,
    };

    const ans = calculator(dataObj, '+');

    expect(ans).toEqual({
      total: '15',
      operation: '+',
      next: null,
    });
  });

  it('should return an Array with total as empty string, button name, and next as empty string', () => {
    const dataObj = {
      total: '',
      operation: '+',
      next: '',
    };

    const ans = calculator(dataObj, '+');

    expect(ans.length).toEqual(3);
  });

  it('should return an object with total as the same value given', () => {
    const dataObj = {
      total: 10,
      operation: '+',
      next: null,
    };

    const ans = calculator(dataObj, '+');

    expect(ans).toEqual({
      total: 10,
      operation: '+',
      next: null,
    });
  });

  it('should return an empty object if the total is an error', () => {
    const dataObj = {
      total: 'ERROR',
      operation: '+',
      next: null,
    };

    const ans = calculator(dataObj, '+');

    expect(ans).toEqual({
      total: 'ERROR',
      operation: '+',
      next: null,
    });
  });
});
