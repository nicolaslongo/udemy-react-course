import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act is basically nothing for this test

    // Assert
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("initially renders 'It's good to see you!'", () => {
    // Arrange
    render(<Greeting />);

    // Act is basically nothing for this test

    // Assert
    const linkElement = screen.getByText(/it's good to see you!/i);
    expect(linkElement).toBeInTheDocument();    
  });

  test("if the button is clicked it renders 'This is being tested'", async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    // This is valid too:
    // const buttonElement = screen.getByText(/change text!/i);
    userEvent.click(buttonElement)

    // Assert
    const linkElement = screen.getByText(/This is being tested/i);
    expect(linkElement).toBeInTheDocument();    
  });

  test("if the button is clicked it does not render 'It's good to see you!", async () => {
    // Arrange
    render(<Greeting />);

    // Act 
    const buttonElement = screen.getByText(/change text!/i);
    // This is valid too:
    // const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert using queryByText, since this method returns null instead of failing when it does not find the
    // text in the screen
    const linkElement = screen.queryByText(/it's good to see you!/i);
    expect(linkElement).not.toBeInTheDocument();    
  });
})