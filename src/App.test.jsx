import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello,World! heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: 'hello,World!' });
  expect(heading).toBeDefined();
});
