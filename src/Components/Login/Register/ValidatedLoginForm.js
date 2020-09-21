import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import config from '../../../config'

import './LoginRegister.css'

export default function ValidatedRegistrationForm () {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function validateForm() {
  //   return username.length > 0 && password.length > 0;
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
        username: username,
        password: password,
    }

    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'content-type': 'application/json',
      }
    })
    console.log(user)
   //**NOTE TO SELF*** REDIRECT TO DASHBOARD
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

            <button type="submit" className="buttonOveride">
              <NavLink className="linkButton" to="/dashboard">Log In</NavLink>
            </button>

      </form>
    </div>
  );

}