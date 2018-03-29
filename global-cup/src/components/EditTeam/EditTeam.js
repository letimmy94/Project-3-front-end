import React, { Component } from 'react'
import axios from 'axios'

class EditTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      color: '',
      firstname: '',
      lastname: '',
      email: '',
      firstname1: '',
      lastname1: '',
      position1: '',
      firstname2: '',
      lastname2: '',
      position2: '',
      firstname3: '',
      lastname3: '',
      position3: '',
      firstname4: '',
      lastname4: '',
      position4: '',
      firstname5: '',
      lastname5: '',
      position5: '',
      firstname6: '',
      lastname6: '',
      position6: '',
      firstname7: '',
      lastname7: '',
      position7: '',
      firstname8: '',
      lastname8: '',
      position8: '',
      firstname9: '',
      lastname9: '',
      position9: '',
      firstname10: '',
      lastname10: '',
      position10: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
          name: team.name,
          color: team.color,
          firstname: team.captain.firstName,
          lastname: team.captain.lastName,
          email: team.captain.email,
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
    let teamId = e.target.id
    console.log(teamId)
    axios
      .put(`http://localhost:4000/teams/edit/${teamId}`, {
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
        <form>
          <div>
            <label htmlFor="name">Team Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="captain">Captain:</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstname}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="players">Player 1:</label>
            <input
              type="text"
              name="firstname1"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstname1}
            />
            <input
              type="text"
              name="lastname1"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname1}
            />
            <select
              name="position1"
              value={this.state.position1}
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
              value={this.state.firstname2}
            />
            <input
              type="text"
              name="lastname2"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname2}
            />
            <select
              name="position2"
              value={this.state.position2}
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
              value={this.state.firstname3}
            />
            <input
              type="text"
              name="lastname3"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname3}
            />
            <select
              name="position3"
              value={this.state.position3}
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
              value={this.state.firstname4}
            />
            <input
              type="text"
              name="lastname4"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname4}
            />
            <select
              name="position4"
              value={this.state.position4}
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
              value={this.state.firstname5}
            />
            <input
              type="text"
              name="lastname5"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname5}
            />
            <select
              name="position5"
              value={this.state.position5}
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
              value={this.state.firstname6}
            />
            <input
              type="text"
              name="lastname6"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname6}
            />
            <select
              name="position6"
              value={this.state.position6}
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
              value={this.state.firstname7}
            />
            <input
              type="text"
              name="lastname7"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname7}
            />
            <select
              name="position7"
              value={this.state.position7}
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
              value={this.state.firstname8}
            />
            <input
              type="text"
              name="lastname8"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname8}
            />
            <select
              name="position8"
              value={this.state.position8}
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
              value={this.state.firstname9}
            />
            <input
              type="text"
              name="lastname9"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname9}
            />
            <select
              name="position9"
              value={this.state.position9}
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
              value={this.state.firstname10}
            />
            <input
              type="text"
              name="lastname10"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastname10}
            />
            <select
              name="position10"
              value={this.state.position10}
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
              value={this.state.color}
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
            <button
              id={this.props.match.params.id}
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditTeam
