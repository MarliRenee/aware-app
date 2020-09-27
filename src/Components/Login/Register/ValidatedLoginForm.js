import React, { useState } from 'react'
import TokenService from '../../../Services/token-service'
import IcebergApiService from '../../../Services/iceberg-api-service'
import { useHistory } from 'react-router'

import './LoginRegister.css'

export default function ValidatedRegistrationForm () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorVisible, setError] = useState(false)

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault()

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username, password),
    )

    IcebergApiService.getIcebergs()
      .then(response => history.push({
        pathname: '/dashboard'
      }))
      .catch(error => {setError(true)})

  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label for="username"><h3>Username:</h3></label>
        <input
          required
          autoFocus
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
         <label for="password"><h3>Password:</h3></label>
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
        
        <button className="submitButton" type="submit">
          Log In
        </button>
       
      </form>
    </div>
  )

}