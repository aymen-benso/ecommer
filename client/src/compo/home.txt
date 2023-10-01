import React, { useState, useEffect } from 'react';

const Home = () => {
        const [BackendData, SetBackendData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          fetch('/api').then(
            response => response.json()
          ).then(
            data => {
              SetBackendData(data.users);
              console.log(data); // Log the value of BackendData to the console
              setIsLoading(false);
            }
          )
        }, [])
      
    return (
        <div className="home">
            <h1>Home Page</h1>
            {isLoading? (
          <p>Loading...</p>
        ) : (
          <ul>
            {Array.isArray(BackendData)? (
              BackendData.map((user, index) => (
                <li key={index}>{user.name}</li>
              ))
            ) : (
              <p>BackendData is not an array</p>
            )}
          </ul>
        )}
        </div>
    ); 
};

export default Home;