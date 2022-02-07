import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  const h1Element = screen.getByText(/React Application/i);
  expect(h1Element).toBeInTheDocument();
});
