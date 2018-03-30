import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EditTeam extends Component {
  render() {
    console.log(this.props)
    let team = this.props.teams.filter(team => {
      return team._id === this.props.match.params.id
    })
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">Team Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].name}
            />
          </div>
          <div>
            <label htmlFor="captain">Captain:</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].captain.firstName}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].captain.lastName}
            />
            <select
              name="position"
              defaultValue={team[0].captain.position}
              onChange={this.props.handleEditInput}
            >
              <option value="F">Forward</option>
              <option value="M">Midfielder</option>
              <option value="D">Defender</option>
              <option value="GK">Goalkeeper</option>
            </select>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].captain.email}
            />
          </div>
          <div>
            <label htmlFor="players">Player 1:</label>
            <input
              type="text"
              name="firstname1"
              placeholder="First Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[0].firstName}
            />
            <input
              type="text"
              name="lastname1"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[0].lastName}
            />
            <select
              name="position1"
              defaultValue={team[0].players[0].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[1].firstName}
            />
            <input
              type="text"
              name="lastname2"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[1].lastName}
            />
            <select
              name="position2"
              defaultValue={team[0].players[1].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[2].firstName}
            />
            <input
              type="text"
              name="lastname3"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[2].lastName}
            />
            <select
              name="position3"
              defaultValue={team[0].players[2].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[3].firstName}
            />
            <input
              type="text"
              name="lastname4"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[3].lastName}
            />
            <select
              name="position4"
              defaultValue={team[0].players[3].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[4].firstName}
            />
            <input
              type="text"
              name="lastname5"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[4].lastName}
            />
            <select
              name="position5"
              defaultValue={team[0].players[4].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[5].firstName}
            />
            <input
              type="text"
              name="lastname6"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[5].lastName}
            />
            <select
              name="position6"
              defaultValue={team[0].players[5].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[6].firstName}
            />
            <input
              type="text"
              name="lastname7"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[6].lastName}
            />
            <select
              name="position7"
              defaultValue={team[0].players[6].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[7].firstName}
            />
            <input
              type="text"
              name="lastname8"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[7].lastName}
            />
            <select
              name="position8"
              defaultValue={team[0].players[7].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[8].firstName}
            />
            <input
              type="text"
              name="lastname9"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[8].lastName}
            />
            <select
              name="position9"
              defaultValue={team[0].players[8].position}
              onChange={this.props.handleEditInput}
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
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[9].firstName}
            />
            <input
              type="text"
              name="lastname10"
              placeholder="Last Name"
              onChange={this.props.handleEditInput}
              defaultValue={team[0].players[9].lastName}
            />
            <select
              name="position10"
              defaultValue={team[0].players[9].position}
              onChange={this.props.handleEditInput}
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
              defaultValue={team[0].color}
              onChange={this.props.handleEditInput}
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
            <Link to="/teams">
              <button
                id={this.props.match.params.id}
                type="submit"
                onClick={this.props.handleEditSubmit}
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default EditTeam
