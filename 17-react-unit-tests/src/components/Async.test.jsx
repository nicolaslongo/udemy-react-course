import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Async from './Async';

describe('Async component', () => {
  test('renders posts when request succeeds', async () => {
    // Arrange
    // Mock fetch call
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: () => [{id: 1, title: "First post"}, {id: 2, title: "Second post"}]
    });
    render(<Async />);

    //Act

    // Assert using findAllByRole since it creates a Promise and works with async code!
    const elements = await screen.findAllByRole('listitem', {});
    expect(elements).toHaveLength(2);
  });
});