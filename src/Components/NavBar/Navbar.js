import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import './Navbar.css'


//TO-DO *** RERENDER LOGIN LINK after state change: https://stackoverflow.com/questions/60142398/react-doesnt-update-the-view-after-login
//Currenty it only re-renders on a page refresh

export default class Navbar extends Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          to='/dashboard'>
          Dashboard
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <main className='NavBar'>
          <ul>
              <li className="logo"><NavLink to="/">AWARE</NavLink></li>
              <li><NavLink to="/iceberg">Demo</NavLink></li>
              <li>
                {TokenService.hasAuthToken()
                  ? this.renderLogoutLink()
                  : this.renderLoginLink()}
              </li>
          </ul>   
      </main>
    )
  }
  
}
