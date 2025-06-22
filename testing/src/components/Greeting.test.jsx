import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import Greeting from './Greeting';

describe('<Greeting />', () => {
  afterEach(cleanup);

  test('Renders Hello World as a test', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.queryByText('Hello World!');
    expect(helloWorldElement).not.toBeNull();
  });

})
