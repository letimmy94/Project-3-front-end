import React, { Component } from 'react'
import axios from 'axios'

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
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
      .then(() => {
        console.log('success')
      })
  }

  render() {
    return (
      <div>
        <h2>Create an Account</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" onChange={this.handleInput} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" onChange={this.handleInput} />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="text" name="email" onChange={this.handleInput} />
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
