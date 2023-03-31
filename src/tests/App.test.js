import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/calculator';
import operate from '../components/logic/operate';

describe('It renders the numbers', () => {
  test('it renders 0', () => {
    render(<Calculator />);
    const zeros = screen.getAllByText('0');
    screen.debug();
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

describe('Write test for the operate function', () => {
  test('To add two numbers 2 and 3 together', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  test('To subtract two numbers 2 and 3 together', () => {
    expect(operate(2, 3, '-')).toBe('-1');
  });

  test('To multiply two numbers 2 and 3 together', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  test('To divide two numbers 2 and 3 together', () => {
    expect(operate(2, 3, '÷')).toBe('0.66666666666666666667');
  });

  test('diving a number by 0', () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('To find the modulo of two numbers 2 and 3 together', () => {
    expect(operate(2, 3, '%')).toBe('2');
  });

  test('finding the modulo of a number by 0', () => {
    expect(operate(2, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('When the wrong operation symbol get passed', () => {
    expect(() => operate(2, 3, 'A')).toThrow('Unknown operation \'A\'');
  });
})
