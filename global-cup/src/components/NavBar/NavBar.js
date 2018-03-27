import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <a>Home</a>
        <a>Instructions</a>
        <a>Teams</a>
      </div>
    )
  }
}

export default NavBar
