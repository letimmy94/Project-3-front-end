import React, { Component } from 'react'
import './NavBar.css'
import { Route, Link } from 'react-router-dom'
import LogOut from '../LogOut/LogOut'
import Login from '../Login/Login'

class NavBar extends Component {
  render() {
    let newNav
    if (this.props.isLoggedIn) {
      newNav = (
        <div className="logout">
          <Link to="/logout">Log Out</Link>
        </div>
      )
    } else {
      newNav = (
        <div>
          <Link className="auth" to="/login">
            Log In
          </Link>
          <Link className="auth" to="/signup">
            Sign Up
          </Link>
        </div>
      )
    }
    return (
      <div className="nav">
        <p className="home">
          <Link to="/">Home</Link>
        </p>
        <p className="teamz">
          <Link to="/teams">Teams</Link>
        </p>
        <p className="addteam">
          <Link to="/new">Add Teams</Link>
        </p>
        {newNav}
      </div>
    )
  }
}

export default NavBar
