import React, { Component,useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router> 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;
