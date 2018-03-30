import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TeamInfo.css'

class TeamInfo extends Component {
  render() {
    let path = `/teams/edit/${this.props.match.params.id}`
    let team = this.props.teams.filter(team => {
      return team._id === this.props.match.params.id
    })

    console.log(team)
    return (
      <div className="teamContainer">
        <h1 className="info">Team Info</h1>
        <h2>{team[0].name}</h2>
        <h4>{team[0].captain.firstName}</h4>
        <h4>{team[0].captain.lastName}</h4>
        <h4>{team[0].captain.position}</h4>
        <h4>{team[0].color}</h4>
        <table>
          <thead>
            <tr>
              <th className="firstc" />
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Position</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Player 1</th>
              <th> {team[0].players[0].firstName}</th>
              <th> {team[0].players[0].lastName}</th>
              <th> {team[0].players[0].position}</th>
            </tr>
            <tr>
              <th>Player 2</th>
              <th> {team[0].players[1].firstName}</th>
              <th> {team[0].players[1].lastName}</th>
              <th> {team[0].players[1].position}</th>
            </tr>
            <tr>
              <th>Player 3</th>
              <th> {team[0].players[2].firstName}</th>
              <th> {team[0].players[2].lastName}</th>
              <th> {team[0].players[2].position}</th>
            </tr>
            <tr>
              <th>Player 4</th>
              <th> {team[0].players[3].firstName}</th>
              <th> {team[0].players[3].lastName}</th>
              <th> {team[0].players[3].position}</th>
            </tr>
            <tr>
              <th>Player 5</th>
              <th> {team[0].players[4].firstName}</th>
              <th> {team[0].players[4].lastName}</th>
              <th> {team[0].players[4].position}</th>
            </tr>
            <tr>
              <th>Player 6</th>
              <th> {team[0].players[5].firstName}</th>
              <th> {team[0].players[5].lastName}</th>
              <th> {team[0].players[5].position}</th>
            </tr>
            <tr>
              <th>Player 7</th>
              <th> {team[0].players[6].firstName}</th>
              <th> {team[0].players[6].lastName}</th>
              <th> {team[0].players[6].position}</th>
            </tr>
            <tr>
              <th>Player 8</th>
              <th> {team[0].players[7].firstName}</th>
              <th> {team[0].players[7].lastName}</th>
              <th> {team[0].players[7].position}</th>
            </tr>
            <tr>
              <th>Player 9</th>
              <th> {team[0].players[8].firstName}</th>
              <th> {team[0].players[8].lastName}</th>
              <th> {team[0].players[8].position}</th>
            </tr>
            <tr>
              <th>Player 10</th>
              <th> {team[0].players[9].firstName}</th>
              <th> {team[0].players[9].lastName}</th>
              <th> {team[0].players[9].position}</th>
            </tr>
          </tbody>
        </table>
        <button>
          <Link to={path}>Edit</Link>
        </button>
        <Link to="/teams">
          <button id={team[0]._id} onClick={this.props.deleteTeam}>
            Delete
          </button>
        </Link>
      </div>
    )
  }
}

export default TeamInfo
