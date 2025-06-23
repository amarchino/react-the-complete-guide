import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
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

  test('Renders "good to see you" if the button was NOT clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const paragraph = screen.queryByText('good to see you', { exact: false });
    expect(paragraph).not.toBeNull();
  });

  test('Renders "Changed!" if the button was clicked', async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.queryByRole('button');
    await userEvent.click(buttonElement);

    // Assert
    const paragraph = screen.queryByText('Changed!');
    expect(paragraph).not.toBeNull();
  });

  test('Does not render "good to see you!" if the button was clicked', async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.queryByRole('button');
    await userEvent.click(buttonElement);

    // Assert
    const paragraph = screen.queryByText('good to see you', { exact: false });;
    expect(paragraph).toBeNull();
  });

})
