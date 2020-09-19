import { setNestedObjectValues } from 'formik';
import React, { useState } from 'react'
import config from '../../../config'

import './LoginRegister.css'

export default function ValidatedRegistrationForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setVisibility] = useState(false);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

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
  }

  function thankYou() {
    setVisibility(true)
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
          <h3>Username</h3>
          <input
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <h3>Password</h3>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <div>
            <button disabled={!validateForm()} type="submit" onClick={thankYou}>
              Register
            </button>

            {isVisible &&
              <div>
                Thank you! You can view your dashboard <a href="/dashboard">here</a>
              </div>
            }
           
           
          </div>
      </form>
    </div>
  );

}