import React from 'react';

const UserCard = ({ user }) => {
  const { name, email, company } = user;
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{company.name}</p>
    </div>
  );
};

export default UserCard;
