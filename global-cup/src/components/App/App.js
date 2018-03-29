import React, { Component } from 'react'
// import axios from 'axios'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import TeamForm from '../TeamForm/TeamForm'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import LogOut from '../LogOut/LogOut'
import './App.css'
import TeamInfo from '../TeamInfo/TeamInfo'
import EditTeam from '../EditTeam/EditTeam'
import axios from 'axios'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: [],
      email: '',
      password: '',
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.updateBigStateInApp = this.updateBigStateInApp.bind(this)
  }

  updateBigStateInApp(data) {
    this.setState({ teams: data })
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
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp(e) {
    // e.preventDefault()
    axios
      .post('http://localhost:4000/users/signup', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({
          isLoggedIn: true
        })
      })
      .catch(err => console.log(err))
  }

  handleLogIn(e) {
    // e.preventDefault()
    axios
      .post('http://localhost:4000/users/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({
          isLoggedIn: true
        })
      })
      .catch(err => console.log(err))
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Global Cup!</h1>
        </header>

        <div className="navbar">
          <NavBar isLoggedIn={this.state.isLoggedIn} />
        </div>
        <Switch>
          <Route
            path="/new"
            render={() => {
              return <TeamForm updateBigStateInApp={this.updateBigStateInApp} />
            }}
          />
          <Route
            path="/teams/edit/:id"
            render={props => {
              return (
                <EditTeam
                  updateBigStateInApp={this.updateBigStateInApp}
                  {...props}
                />
              )
            }}
          />
          <Route
            path="/teams/:id"
            render={props => {
              return (
                <TeamInfo
                  updateBigStateInApp={this.updateBigStateInApp}
                  {...props}
                />
              )
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
            render={props => {
              return (
                <Signup
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleSignUp={this.handleSignUp}
                />
              )
            }}
          />
          <Route
            path="/login"
            render={props => {
              return (
                <Login
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleLogIn={this.handleLogIn}
                />
              )
            }}
          />
          <Route
            path="/logout"
            render={props => {
              return (
                <LogOut
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogOut={this.handleLogOut}
                />
              )
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default App
