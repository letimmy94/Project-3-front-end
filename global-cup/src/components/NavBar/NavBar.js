import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    let newNav
    if (this.props.isLoggedIn) {
      newNav = (
        <div>
          <Link to="/logout">Log Out</Link>
        </div>
      )
    } else {
      newNav = (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    }
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/new">Add Teams</Link>
        {newNav}
      </div>
    )
  }
}

export default NavBar
