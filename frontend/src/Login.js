// Login.js (i frontend/src-komponenter)

import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Här skulle vi skicka data till backend för autentisering
    console.log('Inloggning med', username, password);
  };

  return (
    <div>
      <h1>SchoolOS Inloggning</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Logga in</button>
      </form>
    </div>
  );
}

export default Login;
