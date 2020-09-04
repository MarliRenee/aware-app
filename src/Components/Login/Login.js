import React from 'react';
import "./Login.css"

function Login() {
  return (
      <main className='Login'>
        <header>
           <h1>Sign In</h1>
           <h3>Sign up to access past iceberg journeys, and see emerging patterns</h3>
        </header>

        <div class="SignUpForm">
            <form class="UsernameForm">
                <h2>Username:</h2>
                <input type="text" />
            </form>
            <form class="PasswordForm">
                <h2>Password:</h2>
                <input type="text" />
            </form>
        </div>
        
        <div class="linkButton">
            <a href="/dashboard">Submit</a>
        </div>

      </main>
  );
}

export default Login;