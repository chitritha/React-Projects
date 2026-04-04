import React from 'react';

function UserCard({ user, onLike, onDislike }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <div className="buttons">
        <button onClick={() => onLike(user.id)}>👍</button>
        <span>{user.likes - user.dislikes}</span>
        <button onClick={() => onDislike(user.id)}>👎</button>
      </div>
    </div>
  );
}

export default UserCard;
