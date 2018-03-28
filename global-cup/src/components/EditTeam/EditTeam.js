import React, { Component } from 'react'
import axios from 'axios'

class EditTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: {
        captain: {
          firstName: '',
          lastName: '',
          email: ''
        },
        record: {
          wins: '',
          losses: '',
          draws: ''
        },
        name: '',
        players: ['', '', '', '', '', '', '', '', '', '', ''],
        color: ''
      }
    }
  }
  componentDidMount() {
    let team
    axios
      .get(`http://localhost:4000/teams/${this.props.match.params.id}`)
      .then(res => {
        team = res.data
      })
      .then(() => {
        this.setState({
          team: team
        })
        console.log(this.state)
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .put('http://localhost:4000/teams/edit/:id', {
        name: this.state.team.name,
        color: this.state.team.color,
        captain: {
          firstName: this.state.team.captain.firstname,
          lastName: this.state.team.captain.lastname,
          email: this.state.team.captain.email
        },
        players: [
          {
            firstName: this.state.team.players[0].firstname,
            lastName: this.state.team.players[0].lastname,
            position: this.state.team.players[0].position
          },
          {
            firstName: this.state.team.players[1].firstname,
            lastName: this.state.team.players[1].lastname,
            position: this.state.team.players[1].position
          },
          {
            firstName: this.state.team.players[2].firstname,
            lastName: this.state.team.players[2].lastname,
            position: this.state.team.players[2].position
          },
          {
            firstName: this.state.team.players[3].firstname,
            lastName: this.state.team.players[3].lastname,
            position: this.state.team.players[3].position
          },
          {
            firstName: this.state.team.players[4].firstname,
            lastName: this.state.team.players[4].lastname,
            position: this.state.team.players[4].position
          },
          {
            firstName: this.state.team.players[5].firstname,
            lastName: this.state.team.players[5].lastname,
            position: this.state.team.players[5].position
          },
          {
            firstName: this.state.team.players[6].firstname,
            lastName: this.state.team.players[6].lastname,
            position: this.state.team.players[6].position
          },
          {
            firstName: this.state.team.players[7].firstname,
            lastName: this.state.team.players[7].lastname,
            position: this.state.team.players[7].position
          },
          {
            firstName: this.state.team.players[8].firstname,
            lastName: this.state.team.players[8].lastName,
            position: this.state.team.players[8].position
          },
          {
            firstName: this.state.team.players[9].firstname,
            lastName: this.state.team.players[9].lastname,
            position: this.state.team.players[9].position
          },
          {
            firstName: this.state.team.players[10].firstname,
            lastName: this.state.team.players[10].lastname,
            position: this.state.team.players[10].position
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
        <form>
          <div>
            <label htmlFor="name">Team Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.team.name}
            />
          </div>
          <div>
            <label htmlFor="captain">Captain:</label>
            <input
              type="text"
              name="team.captain.firstName"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.captain.firstName}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.captain.lastName}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.team.captain.email}
            />
          </div>
          <div>
            <label htmlFor="players">Player 1:</label>
            <input
              type="text"
              name="firstname1"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname1"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position1"
              value={this.state.team.position1}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 2:</label>
            <input
              type="text"
              name="firstname2"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname2"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position2"
              value={this.state.team.position2}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 3:</label>
            <input
              type="text"
              name="firstname3"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname3"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position3"
              value={this.state.team.position3}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 4:</label>
            <input
              type="text"
              name="firstname4"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname4"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position4"
              value={this.state.team.position4}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 5:</label>
            <input
              type="text"
              name="firstname5"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname5"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position5"
              value={this.state.team.position5}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 6:</label>
            <input
              type="text"
              name="firstname6"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname6"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position6"
              value={this.state.team.position6}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 7:</label>
            <input
              type="text"
              name="firstname7"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname7"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position7"
              value={this.state.team.position7}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 8:</label>
            <input
              type="text"
              name="firstname8"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname8"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position8"
              value={this.state.team.position8}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 9:</label>
            <input
              type="text"
              name="firstname9"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname9"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position9"
              value={this.state.team.position9}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 10:</label>
            <input
              type="text"
              name="firstname10"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname10"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position10"
              value={this.state.team.position10}
              onChange={this.handleChange}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="players">Player 11:</label>
            <input
              type="text"
              name="firstname11"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.team.firstName}
            />
            <input
              type="text"
              name="lastname11"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.team.lastName}
            />
            <select
              name="position11"
              value={this.state.team.position11}
              onChange={this.handleChange}
            >
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
              value={this.state.team.color}
              onChange={this.handleChange}
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

export default EditTeam
