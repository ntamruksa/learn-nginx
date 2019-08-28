import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:4001/api')
      setData(response.data)
    }

    fetchData()
    return () => {}
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data.message}</p>
        <ul>
          {data.users && data.users.map(user => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
