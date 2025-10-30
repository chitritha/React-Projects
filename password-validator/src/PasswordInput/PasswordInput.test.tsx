import { render, screen, fireEvent } from '@testing-library/react';
import { renderPasswordInput } from './PasswordInput';

describe('PasswordInput Component', () => {
  test('renders input and reset button, handles change and disabled state', () => {
    const mockProps = {
      newPassword: 'Test123!',
      onChangeHandler: jest.fn(),
      onClickHandler: jest.fn(),
      isPasswordValid: false,
    };

    render(renderPasswordInput(mockProps));

    // Input field
    const input = screen.getByPlaceholderText(/Enter new password to validate/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('Test123!');

    // Fire onChange
    fireEvent.change(input, { target: { value: 'NewPass123!' } });
    expect(mockProps.onChangeHandler).toHaveBeenCalled();

    // Reset button disabled
    const button = screen.getByRole('button', { name: /Reset Password/i });
    expect(button).toBeDisabled();

    // Re-render with enabled button
    render(renderPasswordInput({ ...mockProps, isPasswordValid: true }));
    const enabledButton = screen.getByRole('button', { name: /Reset Password/i });
    expect(enabledButton).toBeEnabled();
  });
});
