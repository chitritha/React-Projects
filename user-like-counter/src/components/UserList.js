import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // ✅ correct import
import UserCard from './UserCard';

function UserList() {
  const { users, handleLike, handleDislike } = useContext(UserContext);

  const sortedUsers = [...users].sort(
    (a, b) => (b.likes - b.dislikes) - (a.likes - a.dislikes)
  );

  return (
    <div className="user-list">
      {sortedUsers.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ))}
    </div>
  );
}

export default UserList;
