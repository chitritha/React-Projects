import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('renders a list of users', () => {
  const mockUsers = [
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', company: { name: 'Romaguera-Crona' } },
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', company: { name: 'Deckow-Crist' } }
  ];

  render(<UserList users={mockUsers} />);
  
  expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
  expect(screen.getByText(/Ervin Howell/i)).toBeInTheDocument();
});

test('renders no matches message when user list is empty', () => {
  render(<UserList users={[]} />);
  expect(screen.getByText(/No matches found/i)).toBeInTheDocument();
});
