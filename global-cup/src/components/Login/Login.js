import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'

class Login extends Component {
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
    axios.get('http://localhost:4000/users/login', {}).then(() => {
      console.log('success')
    })
  }

  render() {
    return (
      <div className="login">
        <form>
          <h2>Log In</h2>
          <div>
            <label className="login" htmlFor="email">
              Email:
            </label>
            <input type="text" name="email" onChange={this.handleInput} />
          </div>
          <div>
            <label className="login" htmlFor="password">
              Password:
            </label>
            <input type="text" name="password" onChange={this.handleInput} />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Sign in!
          </button>
        </form>
      </div>
    )
  }
}

export default Login
