import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LogOut extends Component {
  render() {
    return (
      <div>
        <h2>Log Out</h2>

        <form>
          <Link to="/">
            <input
              value="Log Out"
              type="submit"
              onClick={this.props.handleLogOut}
              className="logoutlink"
            />
          </Link>
        </form>
      </div>
    )
  }
}

export default LogOut
