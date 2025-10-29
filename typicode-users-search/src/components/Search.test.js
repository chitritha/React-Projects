import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
  test('renders input with correct placeholder and value', () => {
    const mockProps = {
      onChangeHandler: jest.fn(),
      searchText: 'Anna'
    };

    render(<Search {...mockProps} />);

    const input = screen.getByPlaceholderText(/Enter username/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('Anna');

    fireEvent.change(input, { target: { value: 'Maria' } });
    expect(mockProps.onChangeHandler).toHaveBeenCalled();
    
  });
});
