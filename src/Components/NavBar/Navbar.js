import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import './Navbar.css'


//RENDER LOGIN LINK only showing after refresh??

export default class Navbar extends Component {

  // handleLogoutClick = () => {
  // }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          // onClick={this.handleLogoutClick}
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
              <li className="logo"><a href="/">AWARE</a></li>
              <li><a href="iceberg">Demo</a></li>
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
