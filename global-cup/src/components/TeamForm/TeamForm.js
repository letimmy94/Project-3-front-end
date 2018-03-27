import React, { Component } from 'react'
import axios from 'axios'
// import './TeamForm.css'

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
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:4000/teams', {
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
      <div>
        <h2>New Team Sheet</h2>

        <form>
          <div>
            <label htmlFor="name">Team Name:</label>
            <input type="text" name="name" onChange={this.handleInput} />
          </div>
          <div>
            <label htmlFor="captain">Captain:</label>
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
            <label htmlFor="players">Player 1:</label>
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
            <input
              type="text"
              name="position1"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 2:</label>
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
            <input
              type="text"
              name="position2"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 3:</label>
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
            <input
              type="text"
              name="position3"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 4:</label>
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
            <input
              type="text"
              name="position4"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 5:</label>
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
            <input
              type="text"
              name="position5"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 6:</label>
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
            <input
              type="text"
              name="position6"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 7:</label>
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
            <input
              type="text"
              name="position7"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 8:</label>
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
            <input
              type="text"
              name="position8"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 9:</label>
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
            <input
              type="text"
              name="position9"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 10:</label>
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
            <input
              type="text"
              name="position10"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player 11:</label>
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
            <input
              type="text"
              name="position11"
              placeholder="Position"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="color">Team Color:</label>
            <input
              type="text"
              name="color"
              placeholder="Team Color"
              onChange={this.handleInput}
            />
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
