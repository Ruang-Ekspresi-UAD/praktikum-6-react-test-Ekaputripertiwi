import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('-1');
  });

  test('Reset the count using reset button', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton); // Increment twice
    fireEvent.click(resetButton); // Reset
    
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });
});

describe('Greeting Component', () => {
    test('Greeting component displays my name', () => {
      render(<Greeting name="Eka Putri" />);
      const greetingText = screen.getByTestId('greeting');
      expect(greetingText).toHaveTextContent('Hello, Eka Putri');
    });
  
    test('Greeting component displays my lecturer\'s name', () => {
      render(<Greeting name="Eka S.KOM" />);
      const greetingText = screen.getByTestId('greeting');
      expect(greetingText).toHaveTextContent('Hello, Eka S.KOM');
    });
  });
  
describe('AlertButton Component', () => {
  test('Triggers alert with correct message when clicked', () => {
    // Mock alert function
    window.alert = jest.fn();
    render(<AlertButton message="Hello, Alert!" />);
    
    const alertButton = screen.getByText('Show Alert');
    fireEvent.click(alertButton);
    
    expect(window.alert).toHaveBeenCalledWith('Hello, Alert!');
  });
});
