import operation from './operate';

describe('Operations', () => {
  it('should divide the numbers given', () => {
    const operations = operation(8, 2, '÷');
    expect(operations).toBe('4');
  });

  it('should multiply the numbers given', () => {
    const operations = operation(8, 2, 'X');
    expect(operations).toBe('16');
  });

  it('should add the numbers given', () => {
    const operations = operation(8, 2, '+');
    expect(operations).toBe('10');
  });

  it('should subtract the numbers given', () => {
    const operations = operation(8, 2, '-');
    expect(operations).toBe('6');
  });
});
