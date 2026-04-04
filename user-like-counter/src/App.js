import React, { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import UserList from './components/UserList';
import { UserContext } from './context/UserContext'; // ✅ import context

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) =>
        setUsers(data.map((u) => ({ ...u, likes: 0, dislikes: 0 })))
      );
  }, []);

  const handleLike = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, likes: u.likes + 1 } : u
      )
    );
  };

  const handleDislike = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, dislikes: u.dislikes + 1 } : u
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, handleLike, handleDislike }}>
      <div className="App">
        <Title headerText="User Like Counter" />
        <UserList />
      </div>
    </UserContext.Provider>
  );
}

export default App;
