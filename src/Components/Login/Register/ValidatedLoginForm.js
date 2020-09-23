import React, { useState } from 'react'
import TokenService from '../../../Services/token-service'

import './LoginRegister.css'

export default function ValidatedRegistrationForm () {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username, password)
    )
  }

  function link () {
    window.location.href="/dashboard";
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input
          required
          autoFocus
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <h3>Password</h3>
        <input
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />

          <button className="buttonOveride" type="submit" onClick={link}>
            Log In
          </button>
       
      </form>
    </div>
  );

}

// /
