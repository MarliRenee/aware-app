import React from 'react';
import "./Login.css"

export default class Login extends React.Component {
    render() {
        return (
            <main className='Login'>
                <header>
                <h1>Sign In</h1>
                <h3>Sign up to access past iceberg journeys, and see emerging patterns</h3>
                </header>

                <div class="SignUpForm">
                    <form class="UsernameForm">
                        <h2>Username:</h2>
                        <input type="text" className="Username" />
                    </form>
                    <form class="PasswordForm">
                        <h2>Password:</h2>
                        <input type="text" className="Password" />
                    </form>
                </div>
                
                <div 
                    class="linkButton" 
                >
                    <a href="/dashboard">Submit</a>
                </div>

            </main>
        );
    }
   
}
