import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders initial count', () => {
  const { getByText } = render(<Counter />);
  const countElement = getByText('Count: 0');
  expect(countElement).toBeInTheDocument();
});

test('increments the count when the button is clicked', () => {
  const { getByText } = render(<Counter />);
  const buttonElement = getByText('Increment');
  const countElement = getByText('Count: 0');

  fireEvent.click(buttonElement);

  expect(countElement).toHaveTextContent('Count: 1');
});

test('increments the count multiple times', () => {
  const { getByText } = render(<Counter />);
  const buttonElement = getByText('Increment');
  const countElement = getByText('Count: 0');

  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);

  expect(countElement).toHaveTextContent('Count: 2');
});

test('matches snapshot', () => {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});
