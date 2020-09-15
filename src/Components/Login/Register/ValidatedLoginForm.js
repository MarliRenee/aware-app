import React, { useState } from 'react'
import config from '../../../config'
import { Button } from '../../Utils/Utils'

import './LoginRegister.css'


export default function ValidatedLoginForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
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

      // if(
      //   //check username
      //   //check password
      // )

      // then(
      //   //send to dashboard
      // )
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
        </form>
        <Button disabled={!validateForm()} type="submit">
          Login
        </Button>
        {/* send to dashboard if validated as user */}
  
      </div>
    );
  
  }