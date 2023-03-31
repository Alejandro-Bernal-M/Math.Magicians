import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/calculator';
import operate from '../components/logic/operate';
import calculate from '../components/logic/calculate';

describe('It renders the numbers', () => {
  test('it renders 0', () => {
    render(<Calculator />);
    const zeros = screen.getAllByText('0');
    expect(zeros[1]).toBeInTheDocument();
  });
  test('it renders 1', () => {
    render(<Calculator />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  test('it renders 2', () => {
    render(<Calculator />);
    expect(screen.getByText('2')).toBeInTheDocument();
  });
  test('it renders 3', () => {
    render(<Calculator />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
  test('it renders 4', () => {
    render(<Calculator />);
    expect(screen.getByText(/4/)).toBeInTheDocument();
  });
  test('it renders 5', () => {
    render(<Calculator />);
    expect(screen.getByText(/5/)).toBeInTheDocument();
  });
  test('it renders 6', () => {
    render(<Calculator />);
    expect(screen.getByText(/6/)).toBeInTheDocument();
  });
  test('it renders 7', () => {
    render(<Calculator />);
    expect(screen.getByText(/7/)).toBeInTheDocument();
  });
  test('it renders 8', () => {
    render(<Calculator />);
    expect(screen.getByText(/8/)).toBeInTheDocument();
  });
  test('it renders 9', () => {
    render(<Calculator />);
    expect(screen.getByText(/9/)).toBeInTheDocument();
  });
});

describe('When a button is pressed, it should show the value on the screen', () => {
  test('should display 23', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    expect(document.querySelector('.result').textContent).toBe('23');
  });
  test('should display 333', () => {
    render(<Calculator />);
    const button = screen.getByText('3');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(document.querySelector('.result').textContent).toBe('333');
  });
  test('should display 15', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(document.querySelector('.result').textContent).toBe('15');
  });
});

describe('operate', () => {
  test('should add two numbers when operation is "+"', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });

  test('should subtract two numbers when operation is "-"', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe('2');
  });

  test('should multiply two numbers when operation is "x"', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });

  test('should divide two numbers when operation is "÷"', () => {
    const result = operate(6, 2, '÷');
    expect(result).toBe('3');
  });

  test("should return 'Can't divide by 0.' when dividing by 0", () => {
    const result = operate(4, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('should find modulo between two numbers when operation is %', () => {
    const result = operate(7, 3, '%');
    expect(result).toBe('1');
  });

  test("should return 'Can't find modulo as can't divide by 0.' when finding modulo with 0 divisor", () => {
    const result = operate(5, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('should throw an error when operation is unknown', () => {
    expect(() => operate(2, 3, 'unknown')).toThrow("Unknown operation 'unknown'");
  });
});

describe('calculate', () => {
  test('should return an object with null values when buttonName is "AC"', () => {
    const obj = { total: '5', next: '4', operation: '+' };
    const result = calculate(obj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('should return an empty object when buttonName is "0" while next is "0"', () => {
    const obj = { total: '5', next: '0', operation: '+' };
    const result = calculate(obj, '0');
    expect(result).toEqual({});
  });

  test('should update the "next" value when buttonName is a number', () => {
    const obj = { total: '5', next: '4', operation: '+' };
    const result = calculate(obj, '2');
    expect(result).toEqual({ total: '5', next: '42', operation: '+' });
  });

  test('should update the "next" value to "0." when buttonName is "." and there is an operation', () => {
    const obj = { total: '5', next: null, operation: '+' };
    const result = calculate(obj, '.');
    expect(result).toEqual({ total: '5', next: '0.', operation: '+' });
  });

  test('should update the "next" value to "next." when buttonName is "." and there is an operation', () => {
    const obj = { total: '5', next: '4', operation: '+' };
    const result = calculate(obj, '.');
    expect(result).toEqual({ total: '5', next: '4.', operation: '+' });
  });

  test('return original obj when "next" contains "." and buttonName is "." and there is an operation', () => {
    const obj = { total: '5', next: '4.', operation: '+' };
    const result = calculate(obj, '.');
    expect(result).toEqual({ ...obj });
  });

  test('return {} when next is null and total contains "." while buttonName is "." and no operation', () => {
    const obj = { total: '5.', next: null, operation: null };
    const result = calculate(obj, '.');
    expect(result).toEqual({});
  });

  test('should update next with "total." when next is null but total is not while buttonName is "." and no operation', () => {
    const obj = { total: '5', next: null, operation: null };
    const result = calculate(obj, '.');
    expect(result).toEqual({ ...obj, next: '5.' });
  });

  test('should update next to "0." when next and total is null while buttonName is "." and no operation', () => {
    const obj = { total: null, next: null, operation: null };
    const result = calculate(obj, '.');
    expect(result).toEqual({ ...obj, next: '0.' });
  });

  test('should calculate the result when buttonName is "="', () => {
    const obj = { total: '5', next: '4', operation: '+' };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '9', next: null, operation: null });
  });

  test('should return empty object if operation or next is null while buttonName is "="', () => {
    const obj = { total: '5', next: null, operation: '+' };
    const result = calculate(obj, '=');
    expect(result).toEqual({});
  });

  test('should change the sign of "next" or "total" when buttonName is "+/-"', () => {
    const obj = { total: '5', next: '4', operation: '+' };
    const result = calculate(obj, '+/-');
    expect(result).toEqual({ total: '5', next: '-4', operation: '+' });
  });

  test('should change the sign of "total" if next is null when buttonName is "+/-"', () => {
    const obj = { total: '5', next: null, operation: '+' };
    const result = calculate(obj, '+/-');
    expect(result).toEqual({ total: '-5', next: null, operation: '+' });
  });

  test('should return empty object if next and total are null when buttonName is "+/-"', () => {
    const obj = { total: null, next: null, operation: '+' };
    const result = calculate(obj, '+/-');
    expect(result).toEqual({});
  });

  test('should save the operation when buttonName is an operation and there is no "next" value', () => {
    const obj = { total: '5', next: null, operation: null };
    const result = calculate(obj, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });

  test('should save the operation and shift "next" into "total" when buttonName is an operation and there is a "next" value', () => {
    const obj = { total: '5', next: '4', operation: '+' };
    const result = calculate(obj, '-');
    expect(result).toEqual({ total: '9', next: null, operation: '-' });
  });

  test('should update the operation when buttonName is an operation and there is no "next" value', () => {
    const obj = { total: '5', next: null, operation: '+' };
    const result = calculate(obj, '-');
    expect(result).toEqual({ ...obj, operation: '-' });
  });

  test('should update the operation when buttonName is an operation and there is no "total" value', () => {
    const obj = { total: null, next: '5', operation: '+' };
    const result = calculate(obj, '-');
    expect(result).toEqual({ total: 0, operation: '-' });
  });

  test('should save the operation when buttonName is an operation and there is no "total","next" value and operation', () => {
    const obj = { total: null, next: null, operation: null };
    const result = calculate(obj, '-');
    expect(result).toEqual({ operation: '-' });
  });
});
