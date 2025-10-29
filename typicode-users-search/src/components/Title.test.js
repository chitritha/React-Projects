import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
  test('renders the correct header text', () => {
    const mockProps = 'Users List';
    render(<Title headerText = {mockProps} />);
    const headingElement = screen.getByText(/Users List/i);
    expect(headingElement).toBeInTheDocument();
  });
});