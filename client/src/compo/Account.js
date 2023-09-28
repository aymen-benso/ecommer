import React, { useState } from 'react';
import './Account.css';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // handle login logic
    } else {
      // handle signup logic
    }
  };

  return (
    <div>
      <h2>{isLogin? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">{isLogin? 'Login' : 'Signup'}</button>
        <button type="button" onClick={handleToggle}>Switch to {isLogin? 'Signup' : 'Login'}</button>
      </form>
    </div>
  );
};

export default Account;