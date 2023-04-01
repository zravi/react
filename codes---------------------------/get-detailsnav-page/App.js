import { Routes, Route } from 'react-router-dom';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';

import Users from './components/det/Users';
import UserDetails from './components/det/UserDetails';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from API and store in state
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchUsers when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users users={users} />} />
        <Route path="/user/:id" element={<UserDetails users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
