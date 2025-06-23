import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import Async from './Async';

describe('<Async />', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  test('Renders posts if request succeeds', async () => {
    // Arrange
    global.fetch = vi.fn(() => Promise.resolve({
      json: async () => [ {id: 'p1', title: 'First post'} ]
    }));
    render(<Async />);

    // Act

    // Assert
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });

})
