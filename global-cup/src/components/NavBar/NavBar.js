import React, { Component } from 'react'
import './NavBar.css'
import { Route, Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/team">Teams</Link>
        <Link to="/new">Add Teams</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )
  }
}

export default NavBar
