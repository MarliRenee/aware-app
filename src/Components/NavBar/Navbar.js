import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
        <main className='NavBar'>
            <ul>
                <li className="logo"><a href="/">AWARE</a></li>
                <li><a href="login">Sign In</a></li>
                <li><a href="iceberg">Demo</a></li>
            </ul>
        </main>
  )
}

export default Navbar;

        