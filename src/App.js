import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import Iceberg from "./Components/Iceberg/Iceberg";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

import NavBar from "./Components/NavBar/Navbar";

import './App.css'

function App() {
  return (
    <Router>
      <main className='App'>
        <NavBar />
      </main>

      <Route exact path="/"  component={Home} />
      <Route path="/iceberg" component={Iceberg} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />

    </Router>
    
  );
}

export default App;