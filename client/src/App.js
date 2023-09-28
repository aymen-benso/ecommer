import React, { useState, useEffect } from 'react';
import Navbar from './compo/Navbar';
import { harden } from '@agoric/harden';

function App() {
  const [BackendData, SetBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        SetBackendData(harden(data));
        console.log(data); // Log the value of BackendData to the console
        setIsLoading(false);
      }
    )
  }, [])

  return (
    <div className="App">
      <Navbar />
      <h1>Backend Data:</h1>
      {isLoading? (
        <p>Loading...</p>
      ) : (
        <ul>
          {BackendData.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;