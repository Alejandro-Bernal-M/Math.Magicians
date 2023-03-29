import * as React from 'react';
// import * as Reactjs from 'react'
import { render, screen } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('testing calculator web app', () => {
  test('it renders numbers', () => {
    render(<Calculator />);
    const one = screen.getByText(' 1');
    expect(one).toBeInTheDocument();
    // screen.debug();
  });
});
