import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import Iceberg from "./Components/Iceberg/Iceberg";
import Dashboard from "./Components/Dashboard/Dashboard";
import ValidatedLoginForm from "./Components/Login/Register/ValidatedLoginForm";
import NavBar from "./Components/NavBar/Navbar";

import './App.css'

class App extends Component {

  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  
  render() {
    return (
    <Router>
      <main className='App'>
        <NavBar />
      </main>

      <Route 
        exact path="/"  
        component={Home} 
        
      />
      <Route 
        path="/iceberg" 
        component={Iceberg}   
      />
      <Route 
        path={"/iceberg/:icebergId"}
        component={Iceberg }
        //add archive data to component
      />

      <Route 
        path="/dashboard" 
        component={Dashboard}   
      />
      <Route 
        path="/login" 
        component={ValidatedLoginForm}   
      />

    </Router>
    )
  }
}

export default App;