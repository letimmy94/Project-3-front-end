import React, { Component } from 'react'
import './TeamInfo.css'

class TeamInfo extends Component {
  constructor(team) {
    super(team)

    this.state = {}
    console.log(team)
  }

  render() {
    return (
      <div>
        <h1 className="info">Team Info</h1>
        <h2>{this.props.team.name}</h2>
        <h4>{this.props.team.captain.firstName}</h4>
        <h4>{this.props.team.color}</h4>
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
              <th> {this.props.team.players[0].firstName}</th>
              <th> {this.props.team.players[0].lastName}</th>
              <th> {this.props.team.players[0].position}</th>
            </tr>
            <tr>
              <th>Player 2</th>
              <th> {this.props.team.players[1].firstName}</th>
              <th> {this.props.team.players[1].lastName}</th>
              <th> {this.props.team.players[1].position}</th>
            </tr>
            <tr>
              <th>Player 3</th>
              <th> {this.props.team.players[2].firstName}</th>
              <th> {this.props.team.players[2].lastName}</th>
              <th> {this.props.team.players[2].position}</th>
            </tr>
            <tr>
              <th>Player 4</th>
              <th> {this.props.team.players[3].firstName}</th>
              <th> {this.props.team.players[3].lastName}</th>
              <th> {this.props.team.players[3].position}</th>
            </tr>
            <tr>
              <th>Player 5</th>
              <th> {this.props.team.players[4].firstName}</th>
              <th> {this.props.team.players[4].lastName}</th>
              <th> {this.props.team.players[4].position}</th>
            </tr>
            <tr>
              <th>Player 6</th>
              <th> {this.props.team.players[5].firstName}</th>
              <th> {this.props.team.players[5].lastName}</th>
              <th> {this.props.team.players[5].position}</th>
            </tr>
            <tr>
              <th>Player 7</th>
              <th> {this.props.team.players[6].firstName}</th>
              <th> {this.props.team.players[6].lastName}</th>
              <th> {this.props.team.players[6].position}</th>
            </tr>
            <tr>
              <th>Player 8</th>
              <th> {this.props.team.players[7].firstName}</th>
              <th> {this.props.team.players[7].lastName}</th>
              <th> {this.props.team.players[7].position}</th>
            </tr>
            <tr>
              <th>Player 9</th>
              <th> {this.props.team.players[8].firstName}</th>
              <th> {this.props.team.players[8].lastName}</th>
              <th> {this.props.team.players[8].position}</th>
            </tr>
            <tr>
              <th>Player 10</th>
              <th> {this.props.team.players[9].firstName}</th>
              <th> {this.props.team.players[9].lastName}</th>
              <th> {this.props.team.players[9].position}</th>
            </tr>
            <tr>
              <th>Player 11</th>
              <th> {this.props.team.players[10].firstName}</th>
              <th> {this.props.team.players[10].lastName}</th>
              <th> {this.props.team.players[10].position}</th>
            </tr>
          </tbody>
        </table>
        <button>EDIT</button>
      </div>
    )
  }
}

export default TeamInfo
