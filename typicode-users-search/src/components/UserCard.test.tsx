import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

test('renders user details', () => {
  const mockUser = {
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    company: { name: 'Romaguera-Crona' },
  };

  render(<UserCard user={mockUser} />);

  expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
  expect(screen.getByText(/Sincere@april.biz/i)).toBeInTheDocument();
  expect(screen.getByText(/Romaguera-Crona/i)).toBeInTheDocument();
});
