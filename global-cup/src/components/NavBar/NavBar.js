import React, { Component } from 'react'
import './NavBar.css'
import { Route, Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/teams">
          Teams
        </Link>
        <Link className="link" to="/new">
          Add Teams
        </Link>
        <Link className="link" to="/login">
          Log In
        </Link>
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </div>
    )
  }
}

export default NavBar
