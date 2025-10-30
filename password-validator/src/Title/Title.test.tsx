import { render, screen } from '@testing-library/react';
import { renderTitle } from './Title';

describe('Title Component', () => {
  test('renders the correct header text', () => {
    render(renderTitle('Password Validator'));
    const headingElement = screen.getByText(/Password Validator/i);
    expect(headingElement).toBeInTheDocument();
  });
});
