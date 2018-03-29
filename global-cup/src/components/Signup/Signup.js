import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import './SignupStyle.css'

class Signup extends Component {
  // constructor() {
  //   super()
  //   this.state = {}
  //   this.handleInput = this.handleInput.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // handleInput(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios
  //     .post('http://localhost:4000/users', {
  //       password: this.state.password,
  //       email: this.state.email
  //     })
  //     .then(() => {
  //       console.log('success')
  //     })
  // }

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
