import React, { Component } from 'react'
// import axios from 'axios'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import TeamForm from '../TeamForm/TeamForm'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import './App.css'
import TeamInfo from '../TeamInfo/TeamInfo'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Global Cup!</h1>
        </header>

        <div className="navbar">
          <NavBar />
        </div>
        <TeamForm />
        <TeamInfo />
        <Signup />
        <Login />
      </div>
    )
  }
}

export default App
