import React, { useState } from 'react'
import TokenService from '../../../Services/token-service'
import IcebergApiService from '../../../Services/iceberg-api-service'

import './LoginRegister.css'
import { Link } from 'react-router-dom';

export default function ValidatedRegistrationForm () {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorVisible, setError] = useState(false);

  // function validate () {
  //   IcebergApiService.getIcebergs()
  //     .catch(error => setError(true))  
  // } 

  function handleSubmit(e) {
    e.preventDefault();

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username, password),
    );


    IcebergApiService.getIcebergs()
      .then(response => {window.location.href="/dashboard"})
      // implement later: `this.props.history.push('/dashboard')`
      .catch(error => {setError(true)})

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

        {errorVisible && 
          <div>
            Username or password is incorrect. 
          </div>
        }

        <button 
          className="buttonOveride" 
          type="submit" 
        >
          Log In
        </button>
       
      </form>
    </div>
  );

}

// onClick={validate}