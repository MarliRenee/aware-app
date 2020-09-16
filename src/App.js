import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Iceberg from "./Components/Iceberg/Iceberg";
import Dashboard from "./Components/Dashboard/Dashboard";
import ValidatedLoginForm from "./Components/Login/Register/ValidatedLoginForm";
import NavBar from "./Components/NavBar/Navbar";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage"
import PastIceberg from "./Components/Iceberg/PastIceberg/PastIceberg"

import './App.css'

class App extends Component {

  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <NavBar />
        </header>
        <main className='App__main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={Home}
            />
           <Route 
              exact path="/iceberg" 
              component={Iceberg}   
            />

            <Route 
              exact path={"/iceberg/:icebergId"}
              component={PastIceberg}
            />
           
            <Route 
              exact path="/dashboard" 
              component={Dashboard}   
            />
            <Route 
              exact path="/login" 
              component={ValidatedLoginForm}   
            />

            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;