import { render, screen } from '@testing-library/react';
import { renderValidation } from './PasswordValidation';

// Mock validatePassword to control outputs
jest.mock('../PasswordRules/PasswordRules', () => ({
  validatePassword: (password) => [
    { id: 1, rule: 'At least 10 characters', validate: true },
    { 
      id: 2, 
      rule: 'At least 3 of the following', 
      validate: false,
      subRules: [
        { id: 2.1, rule: 'Lowercase letters (a-z)', validate: true },
        { id: 2.2, rule: 'Uppercase letters (A-Z)', validate: false },
        { id: 2.3, rule: 'Numbers (0-9)', validate: true },
        { id: 2.4, rule: 'Special characters (ex. !@#)', validate: false },
      ]
    },
    { id: 3, rule: 'No more than 2 identical characters in a row', validate: true }
  ],
}));

describe('PasswordValidation Component', () => {
  test('renders validation rules and sub-rules with correct classes', () => {
    const mockPassword = 'TestPassword123!';
    render(renderValidation(mockPassword));

    expect(screen.getByText(/At least 10 characters/i)).toHaveClass('valid');
    expect(screen.getByText(/At least 3 of the following/i)).toHaveClass('invalid');
    expect(screen.getByText(/No more than 2 identical characters/i)).toHaveClass('valid');

    expect(screen.getByText(/Lowercase letters \(a-z\)/i)).toHaveClass('valid');
    expect(screen.getByText(/Uppercase letters \(A-Z\)/i)).toHaveClass('invalid');
    expect(screen.getByText(/Numbers \(0-9\)/i)).toHaveClass('valid');
    expect(screen.getByText(/Special characters \(ex. !@#\)/i)).toHaveClass('invalid');
  });
});
