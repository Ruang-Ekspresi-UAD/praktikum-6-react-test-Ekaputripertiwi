// counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';

describe('Counter Component', () => {
  test('Counter default value must be 0', () => {
    render(<Counter />);
    const display = screen.getByTestId('display-value');
    expect(display).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);

    const display = screen.getByTestId('display-value');
    expect(display).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);

    const display = screen.getByTestId('display-value');
    expect(display).toHaveTextContent('-1');
  });

  test('Display shows the correct value', () => {
    render(<Counter />);
    const display = screen.getByTestId('display-value');
    expect(display).toHaveTextContent('0'); // Initial state

    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(display).toHaveTextContent('2'); // After incrementing twice
  });
});
