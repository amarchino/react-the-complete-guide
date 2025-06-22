import { afterEach, describe, expect, it } from 'vitest';
import App from './App';
import { cleanup, render, screen } from '@testing-library/react';

describe('<App />', () => {
  afterEach(() => {
    cleanup();
  })

  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeDefined();
  });

});
