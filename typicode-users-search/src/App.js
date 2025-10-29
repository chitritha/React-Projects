import React, { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Search from './components/Search';
import UserList from './components/UserList';

function App() {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState('');

  const handlerInputChange = (event) => {
    const { value } = event.target;
    setUserName(value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredUsers = userData.filter(user =>
    user.name.toLowerCase().includes(userName.toLowerCase())
  );

  return (
    <div className="App">
      <Title headerText="Typicode Users" />
      <Search searchText={userName} onChangeHandler={handlerInputChange} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
