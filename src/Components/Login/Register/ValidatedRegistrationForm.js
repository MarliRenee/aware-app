import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import TokenService from '../../../Services/token-service'
import IcebergApiService from '../../../Services/iceberg-api-service'

import './LoginRegister.css'

export default function ValidatedRegistrationForm () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorVisible, setError] = useState(false)
  const [thankYouVisible, setThankYou] = useState(false)
 
  function validateForm() {
    return username.length > 0 && password.length > 0
  }

  function handleSubmit(e) {
    e.preventDefault()

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username, password),
    )
    const user = {
      username: username,
      password: password,
    }

    IcebergApiService.postUsers(user)
    .then(responseJson => { 
      if (responseJson.status === 500) {setError(true)}
      else{setThankYou(true)}
    })

    

  }

  return (
    <div className="Login">
      <h2>Sign-Up</h2>
      <p>Create an account to save your iceberg journey and track patterns over time</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Username"></label>
        <input
          id="Username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="Password"></label>
        <input
          id="Password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <div>
          <button className="submitButton" disabled={!validateForm()} type="submit" >
            Register
          </button>

          {thankYouVisible && 
            <div className="response">
              Thank you! You can view your dashboard <NavLink to="/dashboard"><b>here</b></NavLink>
            </div>
          }

          {errorVisible && 
            <div className="response">
              That username is already taken.
            </div>
          }
          
          
        </div>
      </form>
    </div>
  )

}

