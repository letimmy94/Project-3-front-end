import React, { Component } from 'react'
import axios from 'axios'
import './SignupStyle.css'

class Signup extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:4000/users', {
        password: this.state.password,
        email: this.state.email
      })
      .then(() => {
        console.log('success')
      })
  }

  render() {
    return (
      <div className="signupstyle">
        <form>
          <h2>Create an Account</h2>
          <div>
            <label className="signupstyle" htmlFor="password">
              Password:
            </label>
            <input
              className="signinput"
              type="text"
              name="password"
              placeholder="Enter Password"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label className="signupstyle" htmlFor="email">
              Email Address:
            </label>
            <input
              className="signinput"
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={this.handleInput}
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Create an Account!
          </button>
        </form>
      </div>
    )
  }
}

export default Signup
