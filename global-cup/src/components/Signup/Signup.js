import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SignupStyle.css'

class Signup extends Component {
  render() {
    return (
      <div className="signupstyle">
        <form>
          <h2>Create an Account</h2>
          <div>
            <label className="signupstyle" htmlFor="email">
              Email Address:
            </label>
            <input
              className="signinput"
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={this.props.handleInput}
            />
          </div>
          <div>
            <label className="signupstyle" htmlFor="password">
              Password:
            </label>
            <input
              className="signinput"
              type="text"
              name="password"
              placeholder="Enter Password"
              onChange={this.props.handleInput}
            />
          </div>
          <Link to="/teams">
            <button type="submit" onClick={this.props.handleSignUp}>
              Create an Account!
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Signup
