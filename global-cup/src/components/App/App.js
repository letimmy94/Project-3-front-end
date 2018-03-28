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
import EditTeam from '../EditTeam/EditTeam'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

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
        <Switch>
          <Route
            path="/new"
            render={() => {
              return <TeamForm />
            }}
          />
          <Route
            path="/info"
            render={() => {
              return <TeamInfo />
            }}
          />
          <Route
            path="/team"
            render={() => {
              return <Container />
            }}
          />
          <Route
            path="/signup"
            render={() => {
              return <Signup />
            }}
          />
          <Route
            path="/login"
            render={() => {
              return <Login />
            }}
          />
          <Route
            path="/edit/:id"
            render={() => {
              return <EditTeam />
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default App
