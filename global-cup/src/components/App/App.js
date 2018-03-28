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
import axios from 'axios'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    let teams = []
    axios
      .get('http://localhost:4000/teams')
      .then(res => {
        res.data.map(team => {
          teams.push(team)
        })
      })
      .then(() => {
        this.setState({
          teams: teams
        })
        console.log(this.state)
      })
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
            path="/teams/edit/:id"
            render={() => {
              return <EditTeam teams={this.state.teams} />
            }}
          />
          <Route
            path="/teams/:id"
            render={props => {
              return <TeamInfo {...props} teams={this.state.teams} />
            }}
          />

          <Route
            path="/teams"
            render={() => {
              return <Container teams={this.state.teams} />
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
        </Switch>
      </div>
    )
  }
}

export default App
