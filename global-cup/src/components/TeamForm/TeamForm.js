import React, { Component } from 'react'
import axios from 'axios'
import './TeamForm.css'

class TeamForm extends Component {
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
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('https://global-cup.herokuapp.com/teams', {
        name: this.state.name,
        color: this.state.color,
        captain: {
          firstName: this.state.firstname,
          lastName: this.state.lastname,
          email: this.state.email
        },
        players: [
          {
            firstName: this.state.firstname1,
            lastName: this.state.lastname1,
            position: this.state.position1
          },
          {
            firstName: this.state.firstname2,
            lastName: this.state.lastname2,
            position: this.state.position2
          },
          {
            firstName: this.state.firstname3,
            lastName: this.state.lastname3,
            position: this.state.position3
          },
          {
            firstName: this.state.firstname4,
            lastName: this.state.lastname4,
            position: this.state.position4
          },
          {
            firstName: this.state.firstname5,
            lastName: this.state.lastname5,
            position: this.state.position5
          },
          {
            firstName: this.state.firstname6,
            lastName: this.state.lastname6,
            position: this.state.position6
          },
          {
            firstName: this.state.firstname7,
            lastName: this.state.lastname7,
            position: this.state.position7
          },
          {
            firstName: this.state.firstname8,
            lastName: this.state.lastname8,
            position: this.state.position8
          },
          {
            firstName: this.state.firstname9,
            lastName: this.state.lastName9,
            position: this.state.position9
          },
          {
            firstName: this.state.firstname10,
            lastName: this.state.lastname10,
            position: this.state.position10
          },
          {
            firstName: this.state.firstname11,
            lastName: this.state.lastname11,
            position: this.state.position11
          }
        ]
      })
      .then(() => {
        console.log('success')
      })
  }

  render() {
    return (
      <div className="teamsheet">
        <form>
          <h2 className="h2o">New Team Sheet</h2>
          <div>
            <label htmlFor="name">Team Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Team Name"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="captain">Coach:</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname1"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname1"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position1"
              value={this.state.position1}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname2"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname2"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position2"
              value={this.state.position2}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname3"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname3"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position3"
              value={this.state.position3}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname4"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname4"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position4"
              value={this.state.position4}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname5"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname5"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position5"
              value={this.state.position5}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname6"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname6"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position6"
              value={this.state.position6}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname7"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname7"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position7"
              value={this.state.position7}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname8"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname8"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position8"
              value={this.state.position8}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname9"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname9"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position9"
              value={this.state.position9}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname10"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname10"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position10"
              value={this.state.position10}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname11"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="lastname11"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <select
              name="position11"
              value={this.state.position11}
              onChange={this.handleInput}
            >
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="color">Team Color:</label>
            <select
              name="color"
              value={this.state.color}
              onChange={this.handleInput}
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="gray">Gray</option>
              <option value="pink">Pink</option>
            </select>
          </div>
          <div>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default TeamForm
