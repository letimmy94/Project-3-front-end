import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TeamForm.css'

class TeamForm extends Component {
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
              onChange={this.props.handleNewTeamInput}
            />
          </div>
          <div>
            <label htmlFor="captain">Captain:</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position0" onChange={this.props.handleNewTeamInput}>
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.props.handleNewTeamInput}
            />
          </div>
          <div>
            <label htmlFor="players">Player:</label>
            <input
              type="text"
              name="firstname1"
              placeholder="First Name"
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname1"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position1" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname2"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position2" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname3"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position3" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname4"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position4" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname5"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position5" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname6"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position6" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname7"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position7" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname8"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position8" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname9"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position9" onChange={this.props.handleNewTeamInput}>
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
              onChange={this.props.handleNewTeamInput}
            />
            <input
              type="text"
              name="lastname10"
              placeholder="Last Name"
              onChange={this.props.handleNewTeamInput}
            />
            <select name="position10" onChange={this.props.handleNewTeamInput}>
              <option>Please choose a position</option>
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
          </div>
          <div>
            <label htmlFor="color">Team Color:</label>
            <select name="color" onChange={this.props.handleNewTeamInput}>
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
            <Link to="/teams">
              <button type="submit" onClick={this.props.handleNewTeamSubmit}>
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default TeamForm
