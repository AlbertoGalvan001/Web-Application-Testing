import React, { useState } from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<App />);
})

test('There is ball btn', () => {
  const { getByText } = render(<App />)
  getByText(/Balls/i)
})

test('There is strike btn', () => {
  const { getByText } = render(<App />)
  getByText(/Strikes/i)
})
