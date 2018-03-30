import React, { Component } from 'react'
import Container from '../Container/Container'
import NavBar from '../NavBar/NavBar'
import TeamForm from '../TeamForm/TeamForm'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import LogOut from '../LogOut/LogOut'
import './App.css'
import TeamInfo from '../TeamInfo/TeamInfo'
import EditTeam from '../EditTeam/EditTeam'
import axios from 'axios'
import headerImage from './soccer-pattern-vector.jpg'
import soccerImage from './soccerimage.jpeg'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: [],
      email: '',
      password: '',
      isLoggedIn: false,
      newTeam: {},
      editTeam: {}
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.deleteTeam = this.deleteTeam.bind(this)
    this.handleNewTeamInput = this.handleNewTeamInput.bind(this)
    this.handleNewTeamSubmit = this.handleNewTeamSubmit.bind(this)
    this.handleEditInput = this.handleEditInput.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleNewTeamInput(e) {
    let team = { ...this.state.newTeam }
    let prop = [e.target.name]
    let value = e.target.value
    let newTeam = Object.assign({}, team, { [prop]: value })
    this.setState({
      newTeam: newTeam
    })
  }

  handleNewTeamSubmit(e) {
    // e.preventDefault()
    axios
      .post('http://localhost:4000/teams', {
        name: this.state.newTeam.name,
        color: this.state.newTeam.color,
        captain: {
          firstName: this.state.newTeam.firstname,
          lastName: this.state.newTeam.lastname,
          email: this.state.newTeam.email
        },
        players: [
          {
            firstName: this.state.newTeam.firstname1,
            lastName: this.state.newTeam.lastname1,
            position: this.state.newTeam.position1
          },
          {
            firstName: this.state.newTeam.firstname2,
            lastName: this.state.newTeam.lastname2,
            position: this.state.newTeam.position2
          },
          {
            firstName: this.state.newTeam.firstname3,
            lastName: this.state.newTeam.lastname3,
            position: this.state.newTeam.position3
          },
          {
            firstName: this.state.newTeam.firstname4,
            lastName: this.state.newTeam.lastname4,
            position: this.state.newTeam.position4
          },
          {
            firstName: this.state.newTeam.firstname5,
            lastName: this.state.newTeam.lastname5,
            position: this.state.newTeam.position5
          },
          {
            firstName: this.state.newTeam.firstname6,
            lastName: this.state.newTeam.lastname6,
            position: this.state.newTeam.position6
          },
          {
            firstName: this.state.newTeam.firstname7,
            lastName: this.state.newTeam.lastname7,
            position: this.state.newTeam.position7
          },
          {
            firstName: this.state.newTeam.firstname8,
            lastName: this.state.newTeam.lastname8,
            position: this.state.newTeam.position8
          },
          {
            firstName: this.state.newTeam.firstname9,
            lastName: this.state.newTeam.lastName9,
            position: this.state.newTeam.position9
          },
          {
            firstName: this.state.newTeam.firstname10,
            lastName: this.state.newTeam.lastname10,
            position: this.state.newTeam.position10
          },
          {
            firstName: this.state.newTeam.firstname11,
            lastName: this.state.newTeam.lastname11,
            position: this.state.newTeam.position11
          }
        ]
      })
      .then(res => {
        this.setState({ teams: res.data, newTeam: {} })
      })
  }

  handleEdit(team) {
    this.setState({
      editTeam: {
        firstname: team.captain.firstName,
        lastname: team.captain.lastName,
        position: team.captain.position,
        email: team.captain.email,
        color: team.color,
        name: team.name,
        firstname1: team.players[0].firstName,
        lastname1: team.players[0].lastName,
        position1: team.players[0].position,
        firstname2: team.players[1].firstName,
        lastname2: team.players[1].lastName,
        position2: team.players[1].position,
        firstname3: team.players[2].firstName,
        lastname3: team.players[2].lastName,
        position3: team.players[2].position,
        firstname4: team.players[3].firstName,
        lastname4: team.players[3].lastName,
        position4: team.players[3].position,
        firstname5: team.players[4].firstName,
        lastname5: team.players[4].lastName,
        position5: team.players[4].position,
        firstname6: team.players[5].firstName,
        lastname6: team.players[5].lastName,
        position6: team.players[5].position,
        firstname7: team.players[6].firstName,
        lastname7: team.players[6].lastName,
        position7: team.players[6].position,
        firstname8: team.players[7].firstName,
        lastname8: team.players[7].lastName,
        position8: team.players[7].position,
        firstname9: team.players[8].firstName,
        lastname9: team.players[8].lastName,
        position9: team.players[8].position,
        firstname10: team.players[9].firstName,
        lastname10: team.players[9].lastName,
        position10: team.players[9].position
      }
    })
  }

  handleEditInput(e) {
    let team = { ...this.state.editTeam }
    let prop = [e.target.name]
    let value = e.target.value
    let editTeam = Object.assign({}, team, {
      [prop]: value
    })
    this.setState({
      editTeam: editTeam
    })
    console.log(this.state.editTeam)
  }

  handleEditSubmit(e) {
    let teamId = e.target.id
    axios
      .put(`http://localhost:4000/teams/${teamId}`, {
        name: this.state.editTeam.name,
        color: this.state.editTeam.color,
        captain: {
          firstName: this.state.editTeam.firstname,
          lastName: this.state.editTeam.lastname,
          email: this.state.editTeam.email
        },
        players: [
          {
            firstName: this.state.editTeam.firstname1,
            lastName: this.state.editTeam.lastname1,
            position: this.state.editTeam.position1
          },
          {
            firstName: this.state.editTeam.firstname2,
            lastName: this.state.editTeam.lastname2,
            position: this.state.editTeam.position2
          },
          {
            firstName: this.state.editTeam.firstname3,
            lastName: this.state.editTeam.lastname3,
            position: this.state.editTeam.position3
          },
          {
            firstName: this.state.editTeam.firstname4,
            lastName: this.state.editTeam.lastname4,
            position: this.state.editTeam.position4
          },
          {
            firstName: this.state.editTeam.firstname5,
            lastName: this.state.editTeam.lastname5,
            position: this.state.editTeam.position5
          },
          {
            firstName: this.state.editTeam.firstname6,
            lastName: this.state.editTeam.lastname6,
            position: this.state.editTeam.position6
          },
          {
            firstName: this.state.editTeam.firstname7,
            lastName: this.state.editTeam.lastname7,
            position: this.state.editTeam.position7
          },
          {
            firstName: this.state.editTeam.firstname8,
            lastName: this.state.editTeam.lastname8,
            position: this.state.editTeam.position8
          },
          {
            firstName: this.state.editTeam.firstname9,
            lastName: this.state.editTeam.lastname9,
            position: this.state.editTeam.position9
          },
          {
            firstName: this.state.editTeam.firstname10,
            lastName: this.state.editTeam.lastname10,
            position: this.state.editTeam.position10
          },
          {
            firstName: this.state.editTeam.firstname11,
            lastName: this.state.editTeam.lastname11,
            position: this.state.editTeam.position11
          }
        ]
      })
      .then(res => {
        this.setState({ teams: res.data, editTeam: {} })
      })
  }

  deleteTeam(e) {
    let teamId = e.target.id
    axios
      .delete(`http://localhost:4000/teams/${teamId}`, {
        params: { id: teamId }
      })
      .then(res => {
        this.setState({ teams: res.data })
      })
  }

  componentDidMount() {
    let teams = []
    axios
      .get('https://global-cup.herokuapp.com/teams')
      .then(res => {
        res.data.map(team => {
          teams.push(team)
        })
      })
      .then(() => {
        this.setState({
          teams: teams
        })
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
      .post('https://global-cup.herokuapp.com/users/signup', {
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
      .post('https://global-cup.herokuapp.com/users/login', {
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
              return (
                <TeamForm
                  handleNewTeamInput={this.handleNewTeamInput}
                  handleNewTeamSubmit={this.handleNewTeamSubmit}
                />
              )
            }}
          />
          <Route
            path="/teams/edit/:id"
            render={props => {
              return (
                <EditTeam
                  handleEdit={this.handleEdit}
                  handleEditInput={this.handleEditInput}
                  handleEditSubmit={this.handleEditSubmit}
                  {...props}
                  teams={this.state.teams}
                />
              )
            }}
          />
          <Route
            path="/teams/:id"
            render={props => {
              return (
                <TeamInfo
                  teams={this.state.teams}
                  deleteTeam={this.deleteTeam}
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
          <Route
            path="/"
            render={() => {
              return (
                <img
                  className="bodyImage"
                  src={soccerImage}
                  alt={'soccerImage'}
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
